import { createDomElement, renderToDom, renderToDomFragment } from '../utilise/render-utilise';
import { shiftListLeft } from '../utilise/shift-list';
import filterItems from '../utilise/filter-items';


const main = document.querySelector('.main');

const renderPageFilterList = (listGuestsArr) => {
  const newElementDiv = createDomElement('div', null, 'conteiner-filter-guests');
  renderToDom(main, newElementDiv);

  const newElementForm = createDomElement('form', null, 'form-inline', 'my-2', 'my-lg-0');
  renderToDom(newElementDiv, newElementForm);

  const newElementInput = createDomElement('input', null, 'form-control', 'mr-sm-2', 'input-filter');
  renderToDom(newElementForm, newElementInput);

  const newElementBtnFilter = createDomElement('button', 'Filter', 'btn', 'btn-primary', 'my-2', 'my-sm-0', 'filter-guest');
  renderToDom(newElementForm, newElementBtnFilter);

  const newElementDivFilter = createDomElement('div', null, 'list-guests', 'filter-list');
  renderToDom(newElementDiv, newElementDivFilter);

  const newElementUlFilter = createDomElement('ul', null, 'filter-ul');
  const li = listGuestsArr.map(element => createDomElement('li', element, 'li-decorate'));
  renderToDomFragment(newElementUlFilter, li);


  renderToDom(newElementDivFilter, newElementUlFilter);

  const newElementBtn = createDomElement('button', 'Back', 'btn', 'btn-primary', 'my-2', 'my-sm-0', 'back-btn');
  renderToDom(newElementDiv, newElementBtn);
  const btnBack = document.querySelector('.back-btn');

  btnBack.addEventListener('click', shiftListLeft);


  const filt = document.querySelector('.input-filter');
  const filterGuestBtn = document.querySelector('.filter-guest');
  const ul = document.querySelector('.filter-ul');

  filterGuestBtn.addEventListener('click', (e) => {
    e.preventDefault();
    ul.innerHTML = '';
    filterItems(ul, filt.value, listGuestsArr);
  });
};

export default renderPageFilterList;
