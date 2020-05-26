const form = document.getElementById("add");
const button = document.getElementById("btn");

button.addEventListener("click", function (event) {
    let val = form.value;
    let el = document.createElement("li");
    el.innerHTML = val;
    document.getElementById("list").appendChild(el);

    // sterge elementul pe care se face click
    el.addEventListener("click", function () {
        this.parentNode.removeChild(this);
    });
});

document.getElementById("add").onkeypress = function (e) {
    // numarul 13 reprezinta apasarea tasteri Enter
    if (e.keyCode === 13) {
        // daca apas pe enter, pagina isi da refresh si textul dispare; adaugand .preventDefault() pot sa introduc date apasand tasta enter
        event.preventDefault();
        let val = form.value;
        let el = document.createElement("li");
        el.innerHTML = val;
        document.getElementById("list").appendChild(el);
    }
};
