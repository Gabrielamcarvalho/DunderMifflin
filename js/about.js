
  document.querySelector('#about__btn').addEventListener('click', () => {
    document.querySelector('.container').classList.add('add-team');
  });
  //go to top of the page action
  document.querySelector('#arrow-up').addEventListener('click', () => {
    document.querySelector('.container').classList.remove('add-team');
  });