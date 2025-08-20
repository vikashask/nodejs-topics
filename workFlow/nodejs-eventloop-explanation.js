/**
 * NODE.JS AND EVENT LOOP EXPLANATION
 */

/**
 * WHAT IS NODE.JS?
 * ================
 * Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
 * It uses an event-driven, non-blocking I/O model that makes it lightweight
 * and efficient for building scalable network applications.
 *
 * Key Components:
 * 1. V8 Engine - Compiles JavaScript to machine code
 * 2. libuv - C++ library that handles async I/O operations
 * 3. Event Loop - Handles callbacks and manages execution
 * 4. Thread Pool - Handles file system, DNS, and some crypto operations
 */

console.log("1. SYNCHRONOUS vs ASYNCHRONOUS EXECUTION");
console.log("==========================================");

// Synchronous code execution
console.log("Start of synchronous code");
console.log("This runs immediately");
console.log("This also runs immediately");
console.log("End of synchronous code\n");

/**
 * EVENT LOOP PHASES
 * ==================
 * The event loop has 6 main phases:
 *
 * 1. Timer Phase - Executes setTimeout() and setInterval() callbacks
 * 2. Pending Callbacks - Executes I/O callbacks deferred to the next loop iteration
 * 3. Idle, Prepare - Only used internally
 * 4. Poll Phase - Fetches new I/O events; executes I/O related callbacks
 * 5. Check Phase - Executes setImmediate() callbacks
 * 6. Close Callbacks - Executes close event callbacks
 */

console.log("2. EVENT LOOP DEMONSTRATION");
console.log("============================");

// Demonstrate different callback types and their execution order
console.log("Script start");

// setTimeout (Timer phase)
setTimeout(() => {
  console.log("setTimeout callback - Timer phase");
}, 0);

// setImmediate (Check phase)
setImmediate(() => {
  console.log("setImmediate callback - Check phase");
});

// process.nextTick (Microtask - highest priority)
process.nextTick(() => {
  console.log("process.nextTick callback - Microtask queue");
});

// Promise (Microtask queue)
Promise.resolve().then(() => {
  console.log("Promise callback - Microtask queue");
});

console.log("Script end\n");

/**
 * DETAILED EVENT LOOP EXAMPLE
 * ============================
 */

console.log("3. DETAILED EVENT LOOP PHASES");
console.log("==============================");

setTimeout(() => console.log("Timer 1"), 0);
setTimeout(() => console.log("Timer 2"), 0);

setImmediate(() => console.log("Immediate 1"));
setImmediate(() => console.log("Immediate 2"));

process.nextTick(() => console.log("NextTick 1"));
process.nextTick(() => console.log("NextTick 2"));

Promise.resolve().then(() => console.log("Promise 1"));
Promise.resolve().then(() => console.log("Promise 2"));

/**
 * FILE SYSTEM OPERATIONS (Thread Pool)
 * =====================================
 * These operations are handled by the thread pool, not the main event loop
 */

const fs = require("fs");
const path = require("path");

console.log("4. ASYNCHRONOUS FILE OPERATIONS");
console.log("================================");

// Create a sample file to read
const sampleContent = `This is a sample file created to demonstrate Node.js async file operations.
Node.js uses libuv's thread pool for file system operations.
This allows the main thread to remain non-blocking.`;

fs.writeFileSync("sample.txt", sampleContent);

console.log("Before async file read");

fs.readFile("sample.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File read completed (from thread pool)");
  console.log("File content length:", data.length, "characters");
});

console.log("After initiating async file read (non-blocking)\n");

/**
 * NETWORK OPERATIONS DEMONSTRATION
 * =================================
 */

const http = require("http");

console.log("5. NETWORK OPERATIONS (Event-driven)");
console.log("=====================================");

// Simple HTTP server to demonstrate event-driven architecture
const server = http.createServer((req, res) => {
  console.log(`Received ${req.method} request to ${req.url}`);

  // Simulate some async work
  setTimeout(() => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Hello from Node.js Event Loop!",
        timestamp: new Date().toISOString(),
        url: req.url,
      })
    );
  }, 100);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("The server is now listening for incoming connections...\n");

  // Make a sample request to demonstrate the server
  makeHttpRequest();
});

function makeHttpRequest() {
  console.log("6. MAKING HTTP REQUEST");
  console.log("======================");

  const options = {
    hostname: "localhost",
    port: PORT,
    path: "/test",
    method: "GET",
  };

  const req = http.request(options, (res) => {
    console.log(`Response status: ${res.statusCode}`);

    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      console.log("Response received:", JSON.parse(data));

      // Clean up and exit
      setTimeout(() => {
        server.close(() => {
          console.log("\n=== CLEANUP ===");
          // Clean up the sample file
          fs.unlinkSync("sample.txt");
          console.log("Server closed and files cleaned up");
          console.log("Event loop demonstration completed!");
        });
      }, 1000);
    });
  });

  req.on("error", (error) => {
    console.error("Request error:", error);
  });

  req.end();
}

/**
 * EVENT LOOP BEST PRACTICES
 * ==========================
 *
 * 1. Don't block the event loop with heavy computation
 * 2. Use asynchronous operations whenever possible
 * 3. Be careful with process.nextTick() - it can starve the event loop
 * 4. Use worker threads for CPU-intensive tasks
 * 5. Monitor event loop lag in production applications
 */

console.log("\n7. EVENT LOOP MONITORING");
console.log("========================");

// Monitor event loop delay
const { performance } = require("perf_hooks");

function measureEventLoopDelay() {
  const start = performance.now();
  setImmediate(() => {
    const delay = performance.now() - start;
    console.log(`Event loop delay: ${delay.toFixed(2)}ms`);
  });
}

// Measure event loop delay multiple times
measureEventLoopDelay();
setTimeout(() => measureEventLoopDelay(), 100);
setTimeout(() => measureEventLoopDelay(), 200);

/**
 * BLOCKING vs NON-BLOCKING EXAMPLE
 * =================================
 */

console.log("8. BLOCKING vs NON-BLOCKING COMPARISON");
console.log("======================================");

// Non-blocking approach (good)
console.log("Non-blocking approach:");
console.log("Start of non-blocking operation");

setTimeout(() => {
  console.log("Non-blocking operation completed");
}, 50);

console.log("End of non-blocking setup - main thread free to continue\n");

// Note: Avoid blocking operations like this in real applications:
// const start = Date.now();
// while (Date.now() - start < 1000) {
//     // This would block the event loop for 1 second!
// }

console.log("=== END OF NODE.JS EVENT LOOP EXPLANATION ===");
