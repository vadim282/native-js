import '../style/style.scss';
import validationData from '../utilise/validation';
import { createDomElement, renderToDom, renderToDomFragment } from '../utilise/render-utilise';
import addNewGuestToArr from '../utilise/add-new-guest-to-arr';
import changePendingStatus from '../utilise/change-pending-status';
import changeStubListGuests from '../utilise/change-stub-list-guests';
import renderPageFilterList from '../components/renderPageFilterList';

const loader = document.querySelector('.loader');
const wrapper = document.querySelector('.wrapper');
const listGuestStub = document.querySelector('.list-guests');
const inputData = document.querySelector('.form-control');
const parent = document.querySelector('.parent');


let listGuestsArr = [];

window.onload = () => {
  const newStub = createDomElement('div', 'You have no guests!', 'stub');
  renderToDom(listGuestStub, newStub);
  const stubChild = createDomElement('div', null, 'stub-child');
  const stubDiv = document.querySelector('.stub');
  renderToDom(stubDiv, stubChild);
  changeStubListGuests(listGuestsArr, stubDiv);
  const li = listGuestsArr.map(element => createDomElement('li', element, 'li-decorate'));
  renderToDomFragment(parent, li);
};

setTimeout(() => { changePendingStatus(loader, wrapper); }, 2000);

const handleAddNew = (e) => {
  e.preventDefault();

  if (validationData(inputData.value)) {
    listGuestsArr = addNewGuestToArr(listGuestsArr, inputData.value);
    const stubDiv = document.querySelector('.stub');
    changeStubListGuests(listGuestsArr, stubDiv);
    const text = inputData.value;
    const newElement = createDomElement('li', text, 'li-decorate');
    renderToDom(parent, newElement);
    inputData.value = '';
  }
};
const btnAdd = document.querySelector('.btn');
btnAdd.addEventListener('click', handleAddNew);

const btnFilter = document.querySelector('.filter-btn');

const shiftListRight = (e) => {
  e.preventDefault();
  const container = document.querySelector('.conteiner-add-guests');
  container.style.marginLeft = '-1000px';

  renderPageFilterList(listGuestsArr);
};
btnFilter.addEventListener('click', shiftListRight);
