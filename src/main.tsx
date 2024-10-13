import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode>{<App />}</React.StrictMode>);

const focusButtons = document.querySelectorAll('.button-container-1, .button-container-2, .button-container-3');
const modal = document.querySelector('.regions__modal');
const mapContainer = document.querySelectorAll('.regions__map-1, .regions__map-2, .regions__map-3, .regions__map-4');
const defaultMapFill = 'rgba(174, 207, 240, 0.3019607843)';
const flys = document.querySelector('.regions__flys');

focusButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modal.style.right = '-0.0156vw';
    flys.style.opacity = 0;
  });
});

focusButtons[0].addEventListener('click', () => {
  mapContainer.forEach((map) => {
    map.style.fill = 'rgba(254, 230, 41, 1)';
  });
});

focusButtons[1].addEventListener('click', () => {
  mapContainer.forEach((map) => {
    map.style.fill = 'rgba(227, 63, 0, 1)';
  });
});

focusButtons[2].addEventListener('click', () => {
  mapContainer.forEach((map) => {
    map.style.fill = 'rgba(115, 204, 227, 1)';
  });
});

document.addEventListener('click', (event) => {
  if (!modal.contains(event.target) && !Array.from(focusButtons).some((button) => button.contains(event.target))) {
    modal.style.right = '-58.0156vw';
    flys.style.opacity = 1;
    mapContainer.forEach((map) => {
      map.style.fill = defaultMapFill;
    });
  }
});

const imageContainer = document.querySelector('.about__image-wrapper');
const circleAbout = document.querySelector('.circle.about');
let curreentTranslate = 0;
let countTranslate = 0;

circleAbout.addEventListener('click', () => {
  countTranslate += 1;
  if (countTranslate === 1) {
    curreentTranslate -= 42.4375;
  } else if (countTranslate === 2) {
    curreentTranslate -= 43.4375;
  } else {
    curreentTranslate = 2;
    countTranslate = 0;
  }
  imageContainer.style.transform = `translateX(${curreentTranslate}vw)`;
});

const rulesButton = document.querySelector('.about__what-wait-button');
const rulesModal = document.querySelector('.rules-modal');
const closeRulesButton = document.querySelector('.rules-close-button');
let closedRightModal = '-10px';
let openRightModal = '-100vw';
rulesButton?.addEventListener('click', () => {
  rulesModal.style.right = closedRightModal;
});
closeRulesButton?.addEventListener('click', () => {
  rulesModal.style.right = openRightModal;
});
