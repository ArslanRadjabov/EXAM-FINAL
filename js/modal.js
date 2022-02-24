
let elopenmodalz = document.getElementById('openshopz');
let elColsemodalz = document.getElementById('closeshopp');
let elModalz = document.getElementById('shop-inside');

elopenmodalz.addEventListener('click', function () {
  elModalz.classList.add('appear');
});

elColsemodalz.addEventListener('click', function () {
  elModalz.classList.remove('appear');
});


let elopenmodalzs = document.getElementById('openpages');
let elColsemodalzs = document.getElementById('closepages');
let elModalzs = document.getElementById('page-inside');

elopenmodalzs.addEventListener('click', function () {
  elModalzs.classList.add('appear');
});

elColsemodalzs.addEventListener('click', function () {
  elModalzs.classList.remove('appear');
});