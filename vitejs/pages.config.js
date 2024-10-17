import { resolve } from 'path';

const pages = [
  { name: 'main', path: resolve(__dirname, '../index.html') },
  { name: 'secondpage', path: resolve(__dirname, '../src/pages/secondPage.html') },
  { name: 'test', path: resolve(__dirname, '../src/pages/testPage.html') },
];

export default pages;
