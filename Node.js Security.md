## Secure Coding Style

### Don't use eval
    Eval can open up your application for code injection attacks. Try not to use it
    background each one of the following expressions uses eval:

    setInterval(function(){ alert("Hello"); }, 3000);
    setTimeout(function(){ alert("Hello"); }, 3000);
    new Function(String)

 ### Always use strict mode

 ### Handle errors carefully

 ### Do a static analysis of your codebase
    it can catch a lot of errors. For that we suggest using ESLint with the Standard code style.

### Don't run your application with superuser rights

### Set up the obligatory HTTP headers
    some security-related HTTP headers that your site should set
    Strict-Transport-Security 
    X-Frame-Options
    X-XSS-Protection
    X-Content-Type-Options
    Content-Security-Policy
    In Node.js it is easy to set these using the Helmet module:

### Do proper session management

    Set cookie scope
    domain 
    path 
    expires 
    you can use cookies package and  cookie-session.
