/* eslint-disable */
class Modal {
  constructor(options={}) {
    this.options = options;
    this.modalContainer;
    this.modalContainerClassName = this?.options?.modalContainer?.length > 1 ? this?.options?.modalContainer : '';
    this.animation = this?.options?.animation;
    this.content = this?.options?.content;
    this.closeOnEsc = this?.options?.closeOnEsc;
    this.title =
      this?.content?.title?.length > 0 ? this.content.title : "Modal Title";
    this.subtitle =
      this?.content?.subtitle?.length > 0
        ? this?.content?.subtitle
        : "Modal Subtitle";
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
          <h1 class="modal-title">${this.title}</h1>
          <button id="modal-close" class="modal-close">X</button>
        </div>
        <div class="modal-text">
          <p class="modal-paragraph">
            ${this.subtitle}
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
    this?.modalContainer?.classList.add("active");
    this.render();
  }

  close() {
    this.modalContainer?.parentElement?.removeChild(this.modalContainer);
  }

  render() {
    document.querySelector(".modal-close")?.addEventListener("click", () => {
      this.close();
    });
    document?.querySelector(".modal-apply")?.addEventListener("click", () => {
      this.options?.modalButtons?.applyButton?.applyAction();
    });
    document?.querySelector(".modal-cancel")?.addEventListener("click", () => {
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