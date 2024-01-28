export function getCardHeight() {
  const card = document.querySelector('.gallery-item');
  const cardRect = card.getBoundingClientRect();
  return cardRect.height;
}
