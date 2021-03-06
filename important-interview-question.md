## 1.How does Node.js work asynchronously without multithreading?
The main event loop is single-threaded by nature. But most of the i/o (network, disk, etc) is run 
on separate threads, because the i/o APIs in Node.js are asynchronous/non-blocking by design, 
in order to accommodate the event loop.

## 2.Why Node.js is single threaded.
Node.js was created explicitly as an experiment in async processing. 
async processing on a single thread could provide more performance and scalability under typical web loads than the typical thread-based implementation.
node.js app that isn't doing CPU intensive stuff can run thousands more concurrent connections 
than Apache or IIS or other thread-based servers.
