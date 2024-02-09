    (function() {
    'use strict';
    Object.getOwnPropertyNames(console).filter(function(property) {
        return typeof console[property] == 'function';
    }).forEach(function (verb) {
        console[verb] =function(){return 'Suspected, your IP Address is Suspected...';};
    });
    window.addEventListener('devtools-opened', ()=>{
        // verifying ip signature ...
        // showing ip Address suspecting something
        window.location.href="index";
        window.document.head.innerHTML="";
        window.document.body.innerHTML="clearing IP session";
    });
    window.addEventListener('devtools-closed', ()=>{
        // do some extra code if needed
    });
    let verifyConsole = () => {
        var before = new Date().getTime();
        debugger;
        var after = new Date().getTime();
        if (after - before > 100) { // user ip suspected. 
            window.dispatchEvent(new Event('devtools-opened'));
        }else{
            window.dispatchEvent(new Event('devtools-closed'));
        }
        setTimeout(verifyConsole, 100);
    }
    verifyConsole();        
})();
        