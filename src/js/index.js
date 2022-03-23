let mainStore = [];
let subStore = [];

const { appendCardsToUI } = require('./cards');
const { handlePaginateUI } = require('./paginate');

// starter funtinon to get the data
let fetchDataFromAPI = async () => {
  let response = await fetch(
    'https://filltext.com/?rows=100&fname={firstName}&lname={lastName}&category=["category1","category2","category3"]&pretty=true'
  );
  let data = await response.json();
  mainStore = data;
  subStore = data;
  handlePaginateUI({ list: mainStore, active: 1 });
  appendCardsToUI({ list: mainStore.slice(0, 10) });
};

let filtercategory = (cat) => {
  let list = mainStore.filter((item) => item.category == cat);
  subStore = list;
  appendCardsToUI({ list: list.slice(0, 10) });
  handlePaginateUI({ list, active: 1 });
};

let handlePagination = (e) => {
  let page = Number(e.slice(4, 6));
  appendCardsToUI({ list: subStore.slice((page - 1) * 10, (page - 1) * 10 + 10) });
  handlePaginateUI({ list: subStore, active: page });
};

document.getElementById('category1').addEventListener('click', () => filtercategory('category1'));
document.getElementById('category2').addEventListener('click', () => filtercategory('category2'));
document.getElementById('category3').addEventListener('click', () => filtercategory('category3'));

// this is the only way works for litning on page click
setInterval(() => {
  document.getElementById('page1').addEventListener('click', () => handlePagination('page1'));
  document.getElementById('page2').addEventListener('click', () => handlePagination('page2'));
  document.getElementById('page3').addEventListener('click', () => handlePagination('page3'));
  document.getElementById('page4').addEventListener('click', () => handlePagination('page4'));
  document.getElementById('page5').addEventListener('click', () => handlePagination('page5'));
  document.getElementById('page6').addEventListener('click', () => handlePagination('page6'));
  document.getElementById('page7').addEventListener('click', () => handlePagination('page7'));
  document.getElementById('page8').addEventListener('click', () => handlePagination('page8'));
  document.getElementById('page9').addEventListener('click', () => handlePagination('page9'));
  document.getElementById('page10').addEventListener('click', () => handlePagination('page10'));
}, 1000);

fetchDataFromAPI();
