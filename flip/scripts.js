function roll() {
    const ul = document.querySelector("ul");

    const first = ul.children[0];
    const last = ul.children[ul.children.length - 1];

    ul.insertBefore(last, first);
    ul.appendChild(first);
}