document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burgerMenu');
    const sideBar = document.getElementById('sideBar');
    const burgerIcon = document.querySelector('.burgerIcon');
    const closeIcon = document.querySelector('.closeIcon');

    burgerMenu.addEventListener('click', function() {
        sideBar.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });
});



