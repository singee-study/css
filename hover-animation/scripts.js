document.querySelector("#a .button").addEventListener('mouseover', () => {
    const el = document.querySelector('#a .hover');
    el.style.height = 'auto';
    const {height} = el.getBoundingClientRect();
    console.log(height);
    el.style.height = '0';
    el.style.transition = 'height 0.5s';
    el.offsetHeight; // read this to force a reflow
    el.style.height = `${height}px`;
})
document.querySelector("#a .button").addEventListener('mouseout', () => {
    const el = document.querySelector('#a .hover');
    el.style.height = '0';
})