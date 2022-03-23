const { appendToUi } = require('./js/append-to-ui');

let fetchDataFromAPI = async () => {
  let response = await fetch(
    'https://filltext.com/?rows=100&fname={firstName}&lname={lastName}&category=[%22categroy1%22,%22category2%22,%22categroy3%22]&pretty=true'
  );
  let data = await response.json();
  appendToUi(data);
};

fetchDataFromAPI();
