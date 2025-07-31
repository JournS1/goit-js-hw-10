import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import warningIcon from '../img/warning-img.png';
import okIcon from '../img/ok-img.png';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  createPromise(delay, state)
    .then(delay => {
      iziToast.success({
        title: 'Success',
        titleColor: '#fff',
        message: `Fulfilled promise in ${delay}ms`,
        messageColor: '#fff',
        messageSize: '16px',
        backgroundColor: '#59a10d',
        position: 'topRight',
        iconUrl: okIcon,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        titleColor: '#fff',
        message: `Rejected promise in ${delay}ms`,
        messageColor: '#fff',
        messageSize: '16px',
        backgroundColor: '#ef4040',
        position: 'topRight',
        iconUrl: warningIcon,
      });
    });

  form.reset();
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
