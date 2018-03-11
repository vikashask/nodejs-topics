/* example for 
2.Functions that connect to an actual DNS server to perform name resolution, and that always use the network to perform DNS queries. This category contains all functions in the dns module except dns.lookup()
 */
const dns = require('dns');  
dns.resolve4('nodejs.org', (err, addresses) => {  
  if (err) throw err;  
  console.log(`addresses: ${JSON.stringify(addresses)}`);  
  addresses.forEach((a) => {  
    dns.reverse(a, (err, hostnames) => {  
      if (err) {  
        throw err;  
      }  
      console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);  
    });  
  });  
});   