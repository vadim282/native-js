
const validationData = (newGuest) => {
  try {
    const regExpText = /([а-яА-яa-zA-z]+\s)+([а-яА-яa-zA-z]+)/ig;
    if (!regExpText.test(newGuest)) {
      throw new Error('Your data is not valid!');
      return false;
    }
    return true;
  } catch ({ message }) {
    console.error(message);
  }
};

export default validationData;
