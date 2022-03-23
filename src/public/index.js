let store = [];

let fetchDataFromAPI = async () => {
  let response = await fetch(
    'https://filltext.com/?rows=10&fname={firstName}&lname={lastName}&category=[%22categroy1%22,%22category2%22,%22categroy3%22]&pretty=true'
  );

  let data = await response.json();
  store = data;
  console.log('MY DATA: ', store);
};

fetchDataFromAPI();
