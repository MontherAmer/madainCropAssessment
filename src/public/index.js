let store = [];

let fetchDataFromAPI = async () => {
  let response = await fetch(
    'https://filltext.com/?rows=10&fname={firstName}&lname={lastName}&category=[%22categroy1%22,%22category2%22,%22categroy3%22]&pretty=true'
  );

  let data = await response.json();
  store = data;

  console.log('MY DATA: ', store);
  showTheUI(data);
};

fetchDataFromAPI();

let showTheUI = (list) => {
  let cardsDiv = document.querySelector('#cards');
  cardsDiv.innerHTML = '';

  list.map((item) => {
    let newDiv = document.createElement('div');

    newDiv.innerHTML = `
    <div class="card">
      <span class=""> ${item.fname.charAt(0)} ${item.lname.charAt(0)} </span>
      <div class="name-container">
        <p>${item.fname} &nbsp;</p>
        <p>${item.lname}</p>
      </div>
      <div class="card-cat">
        <label class="cat">${item.category}</label>
      </div>
    </div>`;

    console.log('cardsDiv ', cardsDiv);

    cardsDiv.appendChild(newDiv);
  });
};
