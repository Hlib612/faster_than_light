(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-subscribe-modal-open]"),
      closeModalBtn: document.querySelector("[data-subscribe-modal-close]"),
      modal: document.querySelector("[data-subscribe-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();