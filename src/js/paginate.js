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
