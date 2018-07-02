import { createDomElement, renderToDomFragment } from '../utilise/render-utilise';

const filterItems = (ul, value, listGuestsArr) => {
  const targetArr = listGuestsArr.filter(el => el.toLowerCase().indexOf(value.toLowerCase()) > -1);
  const li = targetArr.map(el => (
    createDomElement('li', el)
  ));
  renderToDomFragment(ul, li);
};

export default filterItems;
