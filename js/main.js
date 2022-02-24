
let elopenmodal = document.getElementById('openModal');
let elColsemodal = document.getElementById('close-btn');
let elModal = document.getElementById('home-inside');

elopenmodal.addEventListener('click', function () {
  elModal.classList.add('appear');
});

elColsemodal.addEventListener('click', function () {
  elModal.classList.remove('appear');
});

