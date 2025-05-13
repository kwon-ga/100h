function openModalEvent() {
  const overlay = document.getElementById("overlay");
  const modal = document.getElementById("modal");

  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
}

function closeModalEvent() {
  const overlay = window.parent.document.getElementById("overlay");
  const modal = window.parent.document.getElementById("modal");

  overlay.classList.add("hidden");
  modal.classList.add("hidden");
}
