export function createMarkup({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-item"><a class="gallery-link" href="${largeImageURL}"><img class="gallery-image" src="${webformatURL}" data-source="${largeImageURL}" loading="lazy" alt="${tags}"></a><div class='gallery-history'><div class='block1'><span>Likes</span>${likes}</div><div class='block2'><span>Views</span>${views}</div><div class='block3'><span>Comments</span>${comments}</div><div class='block4'><span>Downloads</span>${downloads}</div></li>`;
}
