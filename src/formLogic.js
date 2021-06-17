import notFound from './images/404.jpeg';

const formSth = document.querySelector('form');
const clientId = 'client_id=GdVV3nJZYh0yss5nPsyAquoqwClzN4agCPpQ2bq8mrM';
const baseLink = 'https://api.unsplash.com/search/photos?page=';
const queryLink = '&orientation=squarish&query=';

const fetchFunction = (input, pageNum) => {
  const cardHolder = document.querySelector('.card-holder');
  cardHolder.innerHTML = '';
  fetch(`${baseLink}${pageNum}${queryLink}${input}&${clientId}`)
    .then(data => data.json())
    .then(data => {
      let cards = '';
      if (data.total === 0) {
        cards = `<div class="404"><img src="${notFound}" height="300px" width="300px"><h3>No images for the search<h3></div>`;
      }
      data.results.forEach(pictureData => {
        cards += `
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="${pictureData.urls.small}" alt="Avatar" class ="card__img">
            </div>
            <div class="flip-card-back">
              <h1>Artist Details</h1>
              <p>Full name:${pictureData.user.name}</p>
              <p>Bio: ${pictureData.user.bio}</p>
            </div>
          </div>
        </div> \n
       `;
      });
      cardHolder.innerHTML = cards;
      location.hash = `${input}+${pageNum}`;
    })
    .catch(err => {
      cards = 'Server issue please try again later';
      cardHolder.innerHTML = cards;
      console.log(err.message);
    });
};

formSth.onsubmit = event => {
  event.preventDefault();
  const input = document.querySelector('#queryString').value;
  fetchFunction(input, 1);
  const inputArray = !localStorage.search ? [] : localStorage.search.split(',');
  const dataList = document.querySelector('#searches');
  if (!localStorage.search) {
    inputArray.push(input);
    dataList.innerHTML = `<option value="${input}">`;
    return localStorage.search = inputArray;
  }
  const index = inputArray.indexOf(input);
  if (index !== -1) {
    inputArray.splice(index, 1);
  }
  if (inputArray.length > 2) {
    inputArray.pop();
  }
  inputArray.unshift(input);

  let options = '';
  inputArray.forEach(el => {
    options += `
    <option value="${el}">
    `;
  });
  dataList.innerHTML = '';
  dataList.innerHTML = options;

  return localStorage.search = inputArray;
};

const prevButton = document.querySelector('#prev');
prevButton.addEventListener('click', () => {
  const searchDetails = location.hash;
  const searchArray = searchDetails.replace('#', '').split('+');
  const pageNumber = parseInt(searchArray[1], 10);
  if (pageNumber >= 1) {
    fetchFunction(searchArray[0], pageNumber - 1);
    location.hash = `${searchArray[0]}+${pageNumber - 1}`;
  }
});

const nextButton = document.querySelector('#next');
nextButton.addEventListener('click', () => {
  const searchDetails = location.hash;
  const searchArray = searchDetails.replace('#', '').split('+');
  const pageNumber = parseInt(searchArray[1], 10);
  fetchFunction(searchArray[0], pageNumber + 1);
  location.hash = `${searchArray[0]}+${pageNumber + 1}`;
});

//     prev. addeventlistener('click', ()=> {
//   const page = location.hash
//   fetch(base)

// })
