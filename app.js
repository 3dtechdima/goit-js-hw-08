const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
//назначение переменной списка ul, опращаясь к элементу ul в HTML по классу
const navItemEl = document.querySelector('ul.js-gallery');
// функция добавления в HTML список ul пунктов li сшаблонной строкой кода HTML
const markup = galleryItems.map(({ preview, description, original }) => {
  return `
  <li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
});
// добавление последующих элементов в конец списка
navItemEl.insertAdjacentHTML('beforeend', markup.join(''));
//назначение переменной модального окна в HTML
const mod = document.querySelector('div.js-lightbox');
// назначение переменной модального окна, обращаясь к кнопке в HTML по классу
const imgModRef = document.querySelector('.lightbox__image');
//
function showPopup(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) return;
  mod.classList.add('is-open');
  updateImageSrc(e.target.dataset.source, e.target.getAttribute('alt'));
}

function updateImageSrc(src = '', alt = '') {
  imgModRef.src = src;
  imgModRef.alt = alt;
}

function closePopup() {
  mod.classList.remove('is-open');
  updateImageSrc();
}
//
function togglePopup(e) {
  if (!e.target.classList.contains('lightbox__button')) return;
  closePopup();
}
// функция закрытия модального окна по нажатию на клавишу Esc
function escClose(e) {
  if (e.keyCode === 27) {
    return closePopup();
  }
}

//
function leftImg() {}

function replacementImg(e) {
  if (e.keyCode === 37) {
    return leftImg();
  }
  if (e.keyCode === 39) {
    return rightImg();
  }
}

mod.addEventListener('click', e => {
  togglePopup(e);
});

navItemEl.addEventListener('click', e => {
  showPopup(e);
});

// Слушатель событий на клавишу Esc
window.addEventListener('keydown', e => escClose(e));
window.addEventListener('keydown', e => replacementImg(e));
