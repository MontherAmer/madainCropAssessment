let mainStore = [];

const { appendToUi } = require('./append-to-ui');
const { handlePaginateUI } = require('./paginate');

let fetchDataFromAPI = async () => {
  let response = await fetch(
    'https://filltext.com/?rows=100&fname={firstName}&lname={lastName}&category=[%22categroy1%22,%22category2%22,%22categroy3%22]&pretty=true'
  );
  let data = await response.json();
  mainStore = data;

  handlePaginateUI({ list: mainStore, active: 1 });
  appendToUi({ list: mainStore.slice(0, 10) });
};

fetchDataFromAPI();
