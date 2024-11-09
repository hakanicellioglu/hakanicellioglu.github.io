const themeButton = document.querySelector('.themeButton');
const themeIcon = document.querySelector('.themeIcon');
const bodyElement = document.body;

document.addEventListener("DOMContentLoaded", () => {
    let deger = localStorage.getItem('theme');
    if (deger == 'dark') {
        darkMode(bodyElement);
    }
    else {
        lightMode(bodyElement);
    }
});

themeButton.addEventListener('click', () => {
    if (bodyElement.classList.contains('dark')) {
        lightMode(bodyElement);
    }
    else {
        darkMode(bodyElement);
    }
});

function darkMode(bodyElement) {
    localStorage.setItem('theme', 'dark');
    bodyElement.classList.add('dark');
    themeIcon.classList.add('fa-solid', 'fa-sun');
    themeIcon.classList.remove('fa-moon');
}

function lightMode(bodyElement) {
    localStorage.setItem('theme', 'light');
    bodyElement.classList.remove('dark');
    themeIcon.classList.add('fa-solid', 'fa-moon');
    themeIcon.classList.remove('fa-sun');
}

window.addEventListener('scroll', () => {
    const backElement = document.querySelector('.backTop')
    if (window.scrollY > 50) {
        backElement.style.display = "flex";
    }
    else {
        backElement.style.display = "none";
    }
});

window.addEventListener('scroll', function () {
    const extra = document.querySelector('.extra');
    const scrollHeight = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollHeight >= documentHeight - 50) {
        extra.style.bottom = '150px';
    } else {
        extra.style.bottom = '25px';
    }


});