export function smoothScrollToNextGroup(cardHeight) {
  const yOffset = cardHeight * 2;
  window.scrollBy({
    top: yOffset,
    behavior: 'smooth',
  });
}
