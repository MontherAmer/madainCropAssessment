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
