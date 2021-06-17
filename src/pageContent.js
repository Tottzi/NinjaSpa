import gitLogo from './images/Github-logo.png';

const clientId = 'client_id=GdVV3nJZYh0yss5nPsyAquoqwClzN4agCPpQ2bq8mrM';
const baseLink = 'https://api.unsplash.com/search/photos?page=1&query=';

const navbar = document.createElement('nav');
navbar.innerHTML = `
<p class='nav__logo nav__logo--white'>Logo</p>
`;
navbar.setAttribute('class', 'nav');

const form = document.createElement('form');
form.setAttribute('class', 'form');
form.innerHTML = `
<label for="query"></label>
<input list="searches" type="text" id="queryString" name="queryString" autocomplete="off">
<datalist id="searches">
</datalist>
`;
const pageFooter = document.createElement('footer');
pageFooter.className = 'footer';
pageFooter.innerHTML = `
<a href="https://github.com/" target="_blank"><img class="footer__img" src="${gitLogo}"><a>
`;

const cardHolder = document.createElement('article');
cardHolder.setAttribute('class', 'card-holder');

const buttons = document.createElement('section');
buttons.setAttribute('class', 'pagination');
buttons.innerHTML = `
<button id="prev" class="btn pagination__btn">Previous</button>
<button id="next" class="btn pagination__btn">Next</button>
`;

const app = document.querySelector('#root');
app.append(navbar, form, cardHolder, buttons);

app.parentNode.append(pageFooter);

