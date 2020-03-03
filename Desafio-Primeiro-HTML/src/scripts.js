const closeModal = document.querySelector(".close-modal");
const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");
const maximazeModal = document.querySelector(".maximaze-modal");
const modal = document.querySelector(".modal");
let cont = 0;

for (let card of cards) {
  card.addEventListener("click", function() {
    const videoId = card.getAttribute("id");
    modalOverlay.classList.add("active");
    modalOverlay.querySelector(
      "iframe"
    ).src = `https://rocketseat.com.br/${videoId}`;
  });
}

closeModal.addEventListener("click", function() {
  modalOverlay.classList.remove("active");
  modalOverlay.querySelector("iframe").src = "";
});

maximazeModal.addEventListener("click", function() {
  cont++;
  if (cont % 2) {
    modal.classList.add("maximaze");
  } else {
    modal.classList.remove("maximaze");
  }
});
