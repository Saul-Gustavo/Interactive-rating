const rating = document.querySelector('.rating-state');
const contentThank = document.querySelector('.thank-u');
const botonEnviar = document.querySelector('.submit');
const botones = document.querySelectorAll('.rating-btn');
const numeroSpan = document.querySelector('.span');

botones.forEach((btn, i = 0) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        numeroSpan.textContent = i + 1;
    })
});

botonEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    rating.style.display = "none";
    contentThank.style.display = "block";
})






