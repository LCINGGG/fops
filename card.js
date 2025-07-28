function togglePaper(cardElement) {
  const id = cardElement.getAttribute("data-id");
  const paper = document.getElementById(`paper-${id}`);
  paper.classList.toggle("show");
}
