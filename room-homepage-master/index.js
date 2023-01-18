// selecting the required elements
const toggleBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');
const overlay = document.querySelector('.overlay');
const navBar = document.querySelector('nav');


// toggle function
toggleBtn.addEventListener('click', function(){
    navBar.classList.remove('hidden');
    navBar.style.transition = 'transform 1s ease-out';
    navBar.style.transition = 'translateX(-100px)';
    overlay.classList.remove('hidden');
});

// close navBar 
closeBtn.addEventListener('click', function(){
    navBar.classList.add('hidden');
    overlay.classList.add('hidden');
});