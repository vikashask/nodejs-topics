function welcome () {  
    console.log("Welcome to JavaTpoint!");  
  }  
  var id1 = setTimeout(welcome,1000);  
  var id2 = setInterval(welcome,2000);  
  clearTimeout(id1);  
//   clearInterval(id2);  