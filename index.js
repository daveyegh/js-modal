const newModal = new Modal({
  modalContainer: "first-modal",
  animation: "slide-up",
  content: {
    title: "Modal Title",
    subtitle:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vitae distinctio, mollitia quam, amet harum consectetur iste nesciunt tempora molestias saepe. Soluta blanditiis quidem ducimus modi tenetur dolor iusto atque, numquam vitae quia neque facere non, asperiores ex quibusdam reprehenderit quod! Nam non sequi expedita earum quisquam a enim animi.    ",
  },
  toggleModalButtons: true,
  closeOnEsc: true,
  modalButtons: {
    applyButton: {
      label: "Apply",
      applyAction: () => {
        setTimeout(() => {
          console.log("Apply");
        }, 1500);
      },
    },
    cancelButton: {
      label: "",
      cancelAction: () => {
        setTimeout(() => {
          console.log("Cancel");
        }, 1500);
      },
    },
  },
});

const secondModal = new Modal();

document.querySelector(".modal-open").addEventListener("click", () => {
  newModal.open();
});

document.querySelector(".modal-open2").addEventListener("click", () => {
  secondModal.open();
});
