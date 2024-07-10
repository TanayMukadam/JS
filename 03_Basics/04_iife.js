//      Immediately Invoked Function Expression (IIFE)


(function one () {
    //Named Iife
    console.log(`DB Connected`);
})();

( (name) => {
    //UnNamed Iife
    console.log(`DB Connected Two ${name}`);
})('tanay');
