card = document.querySelector('.card');

card.addEventListener('click', onClick);

function onClick(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        // console.log(e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.remove();
    }
}