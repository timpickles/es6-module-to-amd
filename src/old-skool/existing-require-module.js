define(['say-hello-es6'], function(helloES6Module) {
    var h1 = document.createElement('h1');
    h1.textContent = "Hello I'm requireJS.";

    document.body.appendChild(h1);

    helloES6Module.Hello.render();
});