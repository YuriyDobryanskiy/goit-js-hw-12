let currentPage = null;
let searchTerm = null;

//import fetch
import { perPage, testGallery } from './js/fetch.js';
//smooth scroll
import { smoothScrollToNextGroup } from './js/components/scroll.js';
//card height
import { getCardHeight } from './js/components/img-block-height.js';
//markup
import { createMarkup } from './js/template.js';
//function
import { showError } from './js/components/modal.js';
//popup with image
import { lightbox } from './js/components/lightbox.js';

//Form
const form = document.querySelector('#imageSearchForm');
const searchInput = document.querySelector('#searchInput');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('#gallery');
const loadMoreBtn = document.querySelector('#loadMoreBtn');

form.addEventListener('submit', async function (e) {
  e.preventDefault();
  searchTerm = searchInput.value.trim();

  if (searchTerm === '') {
    showError('Please enter a search term.');
    return;
  }

  loader.style.display = 'block';
  gallery.innerHTML = '';
  currentPage = 1;

  const data = await testGallery(searchTerm, currentPage);

  if (data) {
    let markup = '';
    data.hits.forEach(element => {
      markup += createMarkup(element);
    });
    gallery.innerHTML = markup;
    showLoadMoreButton(data.totalHits);
    lightbox.refresh();
  }
  loader.style.display = 'none';
  searchInput.value = '';
});
//Form

//loadMore image
loadMoreBtn.addEventListener('click', async function (e) {
  e.preventDefault();

  currentPage += 1;
  loader.style.display = 'block';

  const data = await testGallery(searchTerm, currentPage);
  if (data) {
    let markup = '';
    data.hits.forEach(element => {
      markup += createMarkup(element);
    });

    gallery.insertAdjacentHTML('beforeend', markup);
    showLoadMoreButton(data.totalHits);
    lightbox.refresh();
  }
  loader.style.display = 'none';
  smoothScrollToNextGroup(getCardHeight());
});

//LoadMoreButton
function showLoadMoreButton(totalHits) {
  const imagesDisplayed = currentPage * perPage;
  loadMoreBtn.style.display = imagesDisplayed < totalHits ? 'block' : 'none';

  if (imagesDisplayed >= totalHits) {
    showError("We're sorry, but you've reached the end of search results.");
  }
}
