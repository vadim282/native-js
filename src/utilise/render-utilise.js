export const createDomElement = (newTag, tagItem, ...classList) => {
  const element = document.createElement(newTag);
  if (tagItem) {
    element.innerText = tagItem;
  }
  classList.forEach(el => element.classList.add(el));
  return element;
};

export const renderToDom = (parentElelement, children) => {
  parentElelement.appendChild(children);
};

export const renderToDomFragment = (perentElelement, child) => {
  const fragment = document.createDocumentFragment();
  child.map(element => fragment.appendChild(element));
  perentElelement.appendChild(fragment);
};
