
// Tasks: adding specific class to the overlay class to make it visible
// 1.select modal-btn,modal-overlay,close-btn
// 2.listen for click events on modal-btn and close-btn
// 3.when user clicks modal-btn add .open-modal to modal-overlay
// 4.when user clicks close-btn remove .open-modal from modal-overlay

// 1.selectig elements
const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn');

// 2.event listeners, 3.add .open-modal 4. remove open-modal
modalBtn.addEventListener('click', function () {
     modal.classList.add('open-modal');
});
closeBtn.addEventListener('click', function () {
     modal.classList.remove('open-modal');
});




