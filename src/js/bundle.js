(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
exports.appendToUi = ({ list }) => {
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

},{"./append-to-ui":1,"./paginate":3}],3:[function(require,module,exports){
exports.handlePaginateUI = ({ list, active }) => {
  let cardsDiv = document.querySelector('#paginate');
  cardsDiv.innerHTML = '';

  let pagesNumber = new Array(Math.floor(list.length / 10)).fill(0);

  pagesNumber.map((item, i) => {
    let newDiv = document.createElement('span');

    newDiv.innerHTML = i + 1;

    active === i + 1 ? newDiv.classList.add('page', 'active') : newDiv.classList.add('page');

    cardsDiv.appendChild(newDiv);
  });
};

},{}]},{},[2]);
