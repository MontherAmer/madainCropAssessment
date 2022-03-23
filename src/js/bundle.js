(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
exports.appendCardsToUI = ({ list }) => {
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

    cardsDiv.appendChild(newDiv);
  });
};

},{}],2:[function(require,module,exports){
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
  console.log('CAT ', cat);
  mainStore.map((item) => console.log(item.category));
  let list = mainStore.filter((item) => item.category == cat);
  appendCardsToUI({ list: list.slice(0, 10) });
  handlePaginateUI({ list, active: 1 });

  // category2
};

document.getElementById('category1').addEventListener('click', () => filtercategory('category1'));
document.getElementById('category2').addEventListener('click', () => filtercategory('category2'));
document.getElementById('category3').addEventListener('click', () => filtercategory('category3'));

fetchDataFromAPI();

},{"./cards":1,"./paginate":3}],3:[function(require,module,exports){
exports.handlePaginateUI = ({ list, active }) => {
  let cardsDiv = document.querySelector('#paginate');
  cardsDiv.innerHTML = '';

  let pagesNumber = new Array(Math.ceil(list.length / 10)).fill(0);

  pagesNumber.map((item, i) => {
    let newDiv = document.createElement('span');

    newDiv.innerHTML = i + 1;

    active === i + 1 ? newDiv.classList.add('page', 'active') : newDiv.classList.add('page');

    cardsDiv.appendChild(newDiv);
  });
};

},{}]},{},[2]);
