console.log('work')
let menuBtn = document.getElementById('menuBtn'),
    closeButton = document.getElementById('closeButton'),
    menu = document.getElementById('menu');

menuBtn.addEventListener('click', function() {
    menu.style.display = 'block';
})

closeButton.addEventListener('click', function() {
    menu.style.display = 'none';
})