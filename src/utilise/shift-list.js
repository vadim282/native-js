export const shiftListLeft = (event) => {
  event.preventDefault();
  document.querySelector('.conteiner-add-guests').style.marginLeft = '';
  document.querySelector('.conteiner-add-guests').style.transition = 'margin 1s ease-out 0.5s';
  setTimeout(() => { document.querySelector('.conteiner-filter-guests').remove(); }, 1500);
};

export const shiftListRight = (e) => {
  e.preventDefault();
  document.querySelector('.conteiner-add-guests').style.marginLeft = '-1000px';
  document.querySelector('.conteiner-add-guests').style.transition = 'margin 1s ease-out 0.5s';
};
