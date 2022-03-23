(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = 'function' == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = 'MODULE_NOT_FOUND'), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (var u = 'function' == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        exports.appendCardsToUI = ({ list }) => {
          let cardsDiv = document.querySelector('#cards');
          cardsDiv.innerHTML = '';

          list.map((item) => {
            let newDiv = document.createElement('div');

            newDiv.innerHTML = `
      <div class="card">
        <span class="card-image"> ${item.fname.charAt(0)} ${item.lname.charAt(0)} </span>
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
      },
      {},
    ],
    2: [
      function (require, module, exports) {
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
      },
      { './cards': 1, './paginate': 3 },
    ],
    3: [
      function (require, module, exports) {
        exports.handlePaginateUI = ({ list, active }) => {
          let cardsDiv = document.querySelector('#paginate');
          cardsDiv.innerHTML = '';

          let pagesNumber = new Array(Math.ceil(list.length / 10)).fill(0);

          pagesNumber.map((item, i) => {
            let newDiv = document.createElement('label');

            newDiv.innerHTML = i + 1;

            active === i + 1 ? newDiv.classList.add('page', 'active') : newDiv.classList.add('page');

            newDiv.setAttribute('id', `page${i + 1}`);

            cardsDiv.appendChild(newDiv);
          });
        };
      },
      {},
    ],
  },
  {},
  [2]
);
