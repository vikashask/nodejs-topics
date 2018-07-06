### Introducing the Async Hooks API
```
const asyncHooks = require('async_hooks')
asyncHooks.createHooks({
  init,
  pre,
  post,
  destroy
})
```
### These functions will be fired based on the lifecycle event of the handler objects.

### Buffer security improvements in Node 8

### The biggest change it brings to Node.js users is that it will make possible the introduction of TurboFan and Ignition in V8 5.9.

### Upgrade npm to 5.0.0
--save is no longer necessary as all installs will be saved by default,
node-gyp now supports node-gyp.cmd on Windows,
new publishes will now include both sha512 and sha1 checksums.
A new, standardized lockfile feature meant for cross-package-manager compatibility (package-lock.json), 

### Buffer
Buffer methods now accept Uint8Array as input

### Child Process
Argument and kill signal validations have been improved
Child Process methods accept Uint8Array as input

### Console
Error events emitted when using console methods are now suppressed

### Domains
Native Promise instances are now Domain aware

### File System
The utility class fs.SyncWriteStream has been deprecated
The deprecated fs.read() string interface has been removed

### HTTP
Outgoing Cookie headers are concatenated into a single string
The httpResponse.writeHeader() method has been deprecated

### Stream
Stream now supports destroy() and _destroy() APIs

### TLS
The rejectUnauthorized option now defaults to true

### URL
The WHATWG URL implementation is now a fully-supported Node.js API


