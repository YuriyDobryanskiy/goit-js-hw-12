import axios from 'axios';
import { showError } from './components/modal.js';

const perPage = 40;
const API_KEY = '41936160-9a65f6e7e8f481bcadff71523';
const BASE_URL = 'https://pixabay.com/api';

const testGallery = async (query, page) => {
  const requestUrl = `${BASE_URL}/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

  try {
    const response = await axios.get(requestUrl);
    if (!response.data.hits.length) {
      showError(
        'Sorry, there are no images matching your search query. Please, try again!'
      );
      loadMoreBtn.style.display = 'none';
      return null;
    }
    //send image
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    showError('An error occurred while fetching images. Please try again.');
  }
};

export { perPage, testGallery };
