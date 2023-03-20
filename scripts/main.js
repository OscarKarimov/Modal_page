console.log('salom');

var askButton = document.querySelector('#ask-question');
var overley = document.querySelector('#overlay');
var modalWindow = document.querySelector('#modal');
var modalClose = document.querySelector('#modal-close');

askButton.addEventListener('click', function(){
   overley.classList.toggle('visible');
   modalWindow.classList.toggle('opened')
});
overley.addEventListener('click', function(){
   overley.classList.remove('visible');
   modalWindow.classList.remove('opened')
});

modalClose.addEventListener('click', function(){
   modalWindow.classList.remove('opened');
   overley.classList.remove('visible');
})