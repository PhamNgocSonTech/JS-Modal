const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function Modal() {
  this.openModal = (content) => {
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";

    const container = document.createElement("div");
    container.className = "modal-container";

    const closeBtn = document.createElement("button");
    closeBtn.className = "modal-close";
    closeBtn.innerHTML = "&times;";

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    // append content and elemenets
    modalContent.innerHTML = content;
    container.append(closeBtn, modalContent);
    backdrop.append(container);
    document.body.append(backdrop);

    setTimeout(() => {
      backdrop.classList.add("show");
    }, 0);

    // attach event listners
    closeBtn.onclick = () => this.closeModal(backdrop);
    backdrop.onclick = (e) => {
      if (e.target === backdrop) {
        this.closeModal(backdrop);
      }
    };
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeModal(backdrop);
      }
    });
  };
  this.closeModal = (modalElement) => {
    modalElement.classList.remove("show");
    modalElement.ontransitionend = () => {
      modalElement.remove();
    };
  };
}

const modal = new Modal();

$("#open-modal-1").onclick = () => {
  modal.openModal("<h1>Hello Modal 1</h1>");
};

$("#open-modal-2").onclick = () => {
  modal.openModal("<h1>Hello Modal 2</h1>");
};

$("#open-modal-3").onclick = () => {
  modal.openModal("<h1>Hello Modal 3</h1>");
};
