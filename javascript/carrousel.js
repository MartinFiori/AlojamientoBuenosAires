// ========== Carrousel ==========//

const carrousel = document.getElementById('carrousel');
const containerCarrousel = document.getElementById('containerCarrousel');

let contador = 0;

const pasarFoto = (e) => {
    const $E = e.target;
    console.log($E.parentElement.lastElementChild.children.length)
    if ($E.classList.contains('atras') && contador > 0) {
        contador--;
    }
    if ($E.classList.contains('adelante') && contador < $E.parentElement.lastElementChild.children.length - 1) {
        contador++;
    }
    $E.parentElement.lastElementChild.style.right = `${contador}00%`;
}

containerCarrousel.addEventListener('click',pasarFoto);
