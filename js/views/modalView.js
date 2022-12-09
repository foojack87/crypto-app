const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const modalOpenEventListener = btnsOpenModal.forEach(btn =>
  btn.addEventListener('click', openModal)
);

const modalCloseEventListener = btnCloseModal.addEventListener(
  'click',
  closeModal
);
overlay.addEventListener('click', closeModal);

const escCloseModal = document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
