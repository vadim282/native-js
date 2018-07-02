const changePendingStatus = (loader, mainСontent) => {
  loader.classList.toggle('hidden');
  mainСontent.classList.toggle('hidden');
};

export default changePendingStatus;
