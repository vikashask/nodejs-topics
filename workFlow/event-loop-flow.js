/**
 * NODE.JS SIMPLE EVENT LOOP EXAMPLE
 */

const fs = require("fs");

console.log("Script start"); // Synchronous code runs first

// process.nextTick runs in the microtask queue, executed immediately after the current operation
process.nextTick(() => {
  console.log("process.nextTick callback - Microtask queue");
});

// Promise.then also runs in the microtask queue, after process.nextTick callbacks
Promise.resolve().then(() => {
  console.log("Promise callback - Microtask queue");
});

// setTimeout runs in the Timer phase of the event loop
setTimeout(() => {
  console.log("setTimeout callback - Timer phase");
}, 0);

// setImmediate runs in the Check phase of the event loop
setImmediate(() => {
  console.log("setImmediate callback - Check phase");
});

// fs.readFile is an asynchronous I/O operation handled by the thread pool,
// its callback will be queued in the Poll phase when completed
fs.readFile(__filename, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("fs.readFile callback - Poll phase");
});

console.log("Script end"); // Synchronous code runs last before event loop phases

/**
 * Expected output order explanation:
 *
 * 1. "Script start" and "Script end" run synchronously first.
 * 2. process.nextTick callback runs next, as it has the highest priority microtask queue.
 * 3. Promise callback runs after process.nextTick, still in the microtask queue.
 * 4. setTimeout callback runs in the Timer phase.
 * 5. fs.readFile callback runs in the Poll phase after the I/O operation completes.
 * 6. setImmediate callback runs in the Check phase, after Poll.
 *
 * Note: fs.readFile callback timing may vary depending on system speed,
 * but it will always run before setImmediate if the I/O completes before the Check phase.
 */
