/* 
dns module contains functions belonging to two different categories
1.Functions that use the underlying operating system facilities to perform name resolution, and that do not necessarily perform any network communication.
This category contains only one function: dns.lookup()
2.Functions that connect to an actual DNS server to perform name resolution, and that always use the network to perform DNS queries. This category contains all functions in the dns module except dns.lookup()

dns.getServers()
dns.setServers(servers)
dns.lookup(hostname[, options], callback)
dns.lookupService(address, port, callback)
dns.resolve(hostname[, rrtype], callback)
dns.resolve4(hostname, callback)
dns.resolve6(hostname, callback)
dns.resolveCname(hostname, callback)
dns.resolveMx(hostname, callback)
dns.resolveNs(hostname, callback)
dns.resolveSoa(hostname, callback)
dns.resolveSrv(hostname, callback)
dns.resolvePtr(hostname, callback)
dns.resolveTxt(hostname, callback)
dns.reverse(ip, callback)

*/

const dns = require('dns');

dns.lookup('nodejs.org', (err, addresses, family) => {
  console.log('addresses:', addresses);
});
// o/p address: "192.0.43.8" family: IPv4