/* eslint-disable */
class Modal {
  constructor(options) {
    this.options = options;
    this.modalContainer;
    this.modalContainerClassName = this.options.modalContainer;
    this.animation = this.options.animation;
    this.content = this.options.content;
    this.closeOnEsc = this.options.closeOnEsc;
  }

  open() {
    const modal = document.createElement("div");
    modal.className =
      "modal " + this.modalContainerClassName + " " + this.animation;
    modal.id = "modal";
    modal.innerHTML = `
      <div class="modal-inn">
      <div class="modal-content">
        <div class="modal-top">
          <h1 class="modal-title">${this?.content?.title}</h1>
          <button id="modal-close" class="modal-close">X</button>
        </div>
        <div class="modal-text">
          <p class="modal-paragraph">
            ${this?.content?.subtitle}
          </p>
        </div>
        ${
          this.options.toggleModalButtons
            ? `<div class="modal-bottom">
          <button class="modal-apply">${
            this?.options?.modalButtons?.applyButton?.label !== undefined &&
            this?.options?.modalButtons?.cancelButton?.label !== ""
              ? this?.options?.modalButtons?.applyButton?.label
              : "Apply"
          }</button>
          <button class="modal-cancel">${
            this?.options?.modalButtons?.cancelButton?.label !== undefined &&
            this?.options?.modalButtons?.cancelButton?.label !== ""
              ? this?.options?.modalButtons?.cancelButton?.label
              : "Cancel"
          }</button>
        </div>`
            : ""
        }
  
      </div>
    </div>`;
    this.modalContainer = modal;
    document.body.appendChild(modal);
    this.modalContainer.classList.add("active");
    this.render();
  }

  close() {
    this.modalContainer?.parentElement?.removeChild(this.modalContainer);
  }

  render() {
    document.querySelector(".modal-close").addEventListener("click", () => {
      this.close();
    });
    document?.querySelector(".modal-apply").addEventListener("click", () => {
      this.options?.modalButtons?.applyButton?.applyAction();
    });
    document?.querySelector(".modal-cancel").addEventListener("click", () => {
      this.options?.modalButtons?.cancelButton?.cancelAction();
      this.close();
    });
    if (this.closeOnEsc) {
      document.addEventListener("keydown", (e) => {
        if (e.keyCode === 27) {
          this.close();
        }
      });
    }
  }
}

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

document.querySelector(".modal-open").addEventListener("click", () => {
  newModal.open();
});
