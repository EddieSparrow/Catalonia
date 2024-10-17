import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode>{<App />}</React.StrictMode>);

const baseUrl = import.meta.env.VITE_BASE_URL || '/';
document.querySelectorAll('a').forEach((link) => {
  const href = link.getAttribute('href');
  if (href && href.startsWith('/') && !href.startsWith(baseUrl)) {
    link.href = `${baseUrl}${href.slice(1)}`;
  }
});

const focusButtons = document.querySelectorAll('.button-container-1, .button-container-2, .button-container-3');
const mapPoints = document.querySelectorAll('.map-point') as NodeListOf<HTMLElement>;
const mapPointContainer = document.querySelector('.regions__points') as HTMLElement;
const modal = document.querySelector('.regions__modal') as HTMLElement;
const mapContainer = document.querySelectorAll('.regions__map-1, .regions__map-2, .regions__map-3, .regions__map-4') as NodeListOf<HTMLElement>;
const defaultMapFill = 'rgba(174, 207, 240, 0.3019607843)';
const flys = document.querySelector('.regions__flys') as HTMLElement;

focusButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (modal && flys && mapPointContainer) {
      hideAllPoints();
      modal.style.right = '-0.0156vw';
      flys.style.opacity = '0';
      mapPointContainer.style.opacity = '1';
    }
  });
});

focusButtons[0].addEventListener('click', () => {
  mapContainer.forEach((map) => {
    map.style.fill = 'rgba(254, 230, 41, 1)';
  });
  mapPoints.forEach((map) => {
    map.style.fill = 'rgba(227, 63, 0, 1)';
  });
});

focusButtons[1].addEventListener('click', () => {
  mapContainer.forEach((map) => {
    map.style.fill = 'rgba(227, 63, 0, 1)';
  });
  mapPoints.forEach((map) => {
    map.style.fill = 'rgba(115, 204, 227, 1)';
  });
});

focusButtons[2].addEventListener('click', () => {
  mapContainer.forEach((map) => {
    map.style.fill = 'rgba(115, 204, 227, 1)';
  });
  mapPoints.forEach((map) => {
    map.style.fill = 'rgba(254, 230, 41, 1)';
  });
});

document.addEventListener('click', (event) => {
  if (!modal.contains(event.target as HTMLElement) && !Array.from(focusButtons).some((button) => button.contains(event.target as HTMLElement))) {
    if (modal && flys && mapPointContainer) {
      hideAllPoints();
      modal.style.right = '-58.0156vw';
      flys.style.opacity = '1';
      mapPointContainer.style.opacity = '0';
      mapContainer.forEach((map) => {
        map.style.fill = defaultMapFill;
      });
    }
  }
});

function hideAllPoints() {
  document.querySelectorAll('.map-point').forEach((point) => {
    (point as HTMLElement).style.opacity = '0';
  });
}

const buttonCity1 = document.querySelector('.modal-city-1') as HTMLElement;
const pointCity1 = document.querySelector('.map-point-1') as HTMLElement;
buttonCity1?.addEventListener('click', () => {
  hideAllPoints();
  if (pointCity1) {
    pointCity1.style.opacity = '1';
  }
});

const buttonCity2 = document.querySelector('.modal-city-2') as HTMLElement;
const pointCity2 = document.querySelector('.map-point-2') as HTMLElement;
buttonCity2?.addEventListener('click', () => {
  hideAllPoints();
  if (pointCity2) {
    pointCity2.style.opacity = '1';
  }
});

const imageContainer = document.querySelector('.about__image-wrapper') as HTMLElement;
const circleAbout = document.querySelector('.circle.about') as HTMLElement;
let curreentTranslate = 0;
let countTranslate = 0;

circleAbout?.addEventListener('click', () => {
  countTranslate += 1;
  if (countTranslate === 1) {
    curreentTranslate -= 44.4375;
  } else if (countTranslate === 2) {
    curreentTranslate -= 43.4375;
  } else {
    curreentTranslate = 0;
    countTranslate = 0;
  }
  if (imageContainer) {
    imageContainer.style.transform = `translateX(${curreentTranslate}vw)`;
  }
});

const rulesButton = document.querySelector('.about__what-wait-button') as HTMLElement;
const rulesModal = document.querySelector('.rules-modal') as HTMLElement;
const closeRulesButton = document.querySelector('.rules-close-button') as HTMLElement;
const closedRightModal = '-10px';
const openRightModal = '-100vw';
rulesButton?.addEventListener('click', () => {
  if (rulesModal) {
    rulesModal.style.right = closedRightModal;
  }
});
closeRulesButton?.addEventListener('click', () => {
  if (rulesModal) {
    rulesModal.style.right = openRightModal;
  }
});
