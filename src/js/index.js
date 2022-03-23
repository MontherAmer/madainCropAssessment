let mainStore = [];
let subStore = [];

const { appendCardsToUI } = require('./cards');
const { handlePaginateUI } = require('./paginate');

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
  appendCardsToUI({ list: list.slice(0, 10) });
  handlePaginateUI({ list, active: 1 });
};

document.getElementById('category1').addEventListener('click', () => filtercategory('category1'));
document.getElementById('category2').addEventListener('click', () => filtercategory('category2'));
document.getElementById('category3').addEventListener('click', () => filtercategory('category3'));

fetchDataFromAPI();
