import axios from 'axios';
import { showError } from './components/modal.js';

axios.defaults.baseURL = 'https://pixabay.com/api';
const perPage = 10;
const API_KEY = '41936160-9a65f6e7e8f481bcadff71523';

const testGallery = async (query, page) => {
  const requestData = await axios.get('/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: perPage,
    },
  });

  try {
    if (!requestData.data.hits.length) {
      showError(
        'Sorry, there are no images matching your search query. Please, try again!'
      );
      loadMoreBtn.style.display = 'none';
      return null;
    }
    //send image obj
    return requestData.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    showError('An error occurred while fetching images. Please try again.');
  }
};

export { perPage, testGallery };
