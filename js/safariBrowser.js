let dark = document.querySelector('.browser .iframe .dark');
let white = document.querySelector('.browser .iframe .white');
let browser = document.querySelector('.browser');

dark.addEventListener('click', e =>{   
        browser.classList.add('dark')  
});
white.addEventListener('click', e =>{   
    browser.classList.remove('dark')  
});