export class Hello {
    static render() {
        let h1 = document.createElement('h1');
        h1.textContent = "Hello I'm ES6.";

        document.body.appendChild(h1);
    }
}