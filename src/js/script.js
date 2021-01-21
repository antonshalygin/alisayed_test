// Menu open/close implementation

const menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      hamburger = document.querySelector('.hamburger'),
      overlay = document.querySelector('.menu__overlay'),
      menuLink = document.querySelectorAll('.menu__link');

const openMenu = () => {
          menu.classList.add('active');
},
      closeMenu = () => {
        menu.classList.remove('active');
      };

hamburger.addEventListener('click', () => {
    openMenu();
})

closeElem.addEventListener('click', () => {
    closeMenu();
})

window.addEventListener('scroll', () => {
    closeMenu();
})

window.addEventListener("keydown", (e) => {
    if (e.key == 'Escape') {
        closeMenu();
    }
});

window.addEventListener('click', (e) => {
    if (e.target == overlay) {
        closeMenu();
    }
});

menuLink.forEach (item => {
    item.addEventListener('click', () => {
        closeMenu();
    });
});

// 'send' button appearance

const btn = document.querySelector('.footer__contacts-btn'),
      nameInput = document.querySelector('#name'),
      emailInput = document.querySelector('#email'),
      textInput = document.querySelector('#text');

const checkInputs = () => {
    if (nameInput.value && emailInput.value && textInput.value && btn.classList.contains('hidden')) {
        btn.classList.remove('hidden');
    } else if (!nameInput.value || !emailInput.value || !textInput.value) {
        btn.classList.add('hidden');
    }
}

nameInput.addEventListener('input', () => {
    checkInputs();
})

emailInput.addEventListener('input', () => {
    checkInputs();
})

textInput.addEventListener('input', () => {
    checkInputs();
})