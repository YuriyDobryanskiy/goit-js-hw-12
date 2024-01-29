import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import imgUrl from '../../img/octagon.svg';

export function showError(message) {
  iziToast.error({
    theme: 'dark',
    message: message,
    timeout: 5000,
    backgroundColor: '#EF4040',
    iconUrl: imgUrl,
    messageColor: '#FAFAFB',
    position: 'topRight',
  });
}
