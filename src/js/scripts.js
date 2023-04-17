const menuElement=document.getElementById('menu');
const buttonElement=document.getElementById('toggle-menu');

function handleClick() {
    menuElement.classList.toggle('visible');
}

buttonElement.addEventListener('click', handleClick);