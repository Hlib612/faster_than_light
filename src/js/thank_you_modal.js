(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-thank-you-modal-open]"),
    closeModalBtn: document.querySelector("[data-thank-you-modal-close]"),
    modal: document.querySelector("[data-thank-you-modal]"),
    form: document.querySelector('.review_modal_form'),
    reviewModal: document.querySelector("[data-review-modal]"),
  };

  refs.form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    refs.reviewModal.classList.add("is-hidden")
    refs.modal.classList.remove("is-hidden");
  });
  
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();