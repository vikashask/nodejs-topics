/**
 * NODE.JS LIFECYCLE DEMO — from start to graceful shutdown
 * Shows:
 *  - Sync startup work (module load, config)
 *  - Microtasks (nextTick/Promise)
 *  - Timers (setTimeout / setInterval)
 *  - Check phase (setImmediate)
 *  - Poll phase (fs I/O, http)
 *  - Close callbacks (server.close, socket 'close')
 *  - Process lifecycle hooks (beforeExit, exit, SIGINT, unhandled errors)
 */

const http = require("http");
const fs = require("fs");
const { once } = require("events");

console.log(
  "🔧  1) Synchronous startup: loading modules, reading env, setting config"
);

// Example “sync” startup work
const CONFIG = { port: process.env.PORT ? Number(process.env.PORT) : 3001 };
console.log("✅  Config:", CONFIG);

// Microtasks scheduled during startup
process.nextTick(() =>
  console.log("🧵 nextTick -> runs before other microtasks")
);
Promise.resolve().then(() =>
  console.log("🧵 Promise.then -> microtask runs right after nextTick")
);

/** Process lifecycle hooks */
process.on("beforeExit", (code) => {
  console.log(`🛎  process.beforeExit: about to exit with code=${code}`);
});

process.on("exit", (code) => {
  console.log(`👋 process.exit: exiting with code=${code}`);
});

process.on("SIGINT", async () => {
  console.log("\n🧯 SIGINT (Ctrl+C) caught -> graceful shutdown starting...");
  await shutdown();
});

process.on("unhandledRejection", (reason) => {
  console.error("⚠️  Unhandled Promise rejection:", reason);
});

process.on("uncaughtException", (err) => {
  console.error("💥 Uncaught exception:", err);
});

/** Heartbeat so you can *see* the loop is alive */
const heartbeat = setInterval(() => {
  console.log("💓 event loop heartbeat");
}, 500);

// Simple HTTP server (event-driven)
const server = http.createServer(async (req, res) => {
  console.log(`📨  Request: ${req.method} ${req.url}`);

  // Microtasks scheduled inside a request
  process.nextTick(() => console.log("  ↳ [req] nextTick"));
  Promise.resolve().then(() => console.log("  ↳ [req] Promise.then"));

  // A timer (Timer phase)
  setTimeout(() => {
    console.log("  ⏱  [req] setTimeout 0ms");
  }, 0);

  // Check phase
  setImmediate(() => {
    console.log("  ✅ [req] setImmediate");
  });

  // Poll phase: async I/O
  fs.readFile(__filename, "utf8", (err, code) => {
    if (err) {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: "read failure" }));
      return;
    }
    console.log("  📄 [req] fs.readFile complete (Poll phase)");

    // Send a small payload (don’t dump the whole file)
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        ok: true,
        sample: code.slice(0, 60) + "...",
        when: new Date().toISOString(),
      })
    );
  });

  // Demonstrate socket close callback
  res.on("close", () => {
    console.log("  🔚 [req] response stream closed (Close callbacks phase)");
  });
});

// Server “close” event (Close callbacks)
server.on("close", () => {
  console.log("🔒 server.close -> 'close' event fired (Close callbacks)");
});

// Start server
server.listen(CONFIG.port, async () => {
  console.log(`🚀  2) Server listening on http://localhost:${CONFIG.port}`);

  // Make a self-request so the demo runs end-to-end automatically
  http
    .get(`http://localhost:${CONFIG.port}/demo`, (res) => {
      let buf = "";
      res.on("data", (chunk) => (buf += chunk));
      res.on("end", () => {
        console.log("📥 Self-request response:", buf);
        // After we’ve demonstrated one request, schedule shutdown
        setTimeout(() => {
          console.log("🧹 Scheduling graceful shutdown...");
          shutdown();
        }, 800);
      });
    })
    .on("error", (e) => console.error("Self-request error:", e));
});

/** Graceful shutdown: stop new connections, let existing ones finish, clean timers */
async function shutdown() {
  // Stop the heartbeat timer
  clearInterval(heartbeat);

  // Stop accepting new connections
  const closePromise = new Promise((resolve) => server.close(resolve));

  // Wait for 'close' event to confirm shutdown
  await closePromise;

  // Tiny delay to let any final microtasks/close events flush
  await new Promise((r) => setImmediate(r));

  console.log("✅ Graceful shutdown complete. Exiting…");
  process.exit(0);
}
