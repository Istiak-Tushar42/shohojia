const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const menu = document.querySelector('.nav');

menuIcon.addEventListener('click', showMenu);
closeIcon.addEventListener('click', closeMenu);

function showMenu() {
    menu.classList.add('show');

    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
}

function closeMenu() {
    const menu = document.querySelector('.nav');
    menu.classList.remove('show');

    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
}

// HIDE m-menu on outside click
window.addEventListener('click', e => {
    e.target == menu ? menu.classList.remove('show') : false; 
});

let lastScrollTop = 0;
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.scrollTop;

    if(scrollTop > lastScrollTop) {
        header.style.top = '-88.3445px';
    } else {
        header.style.top = '0';
    }

    lastScrollTop = scrollTop;
});
