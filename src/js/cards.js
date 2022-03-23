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
