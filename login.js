const signup = document.querySelector('.signup');
const login = document.querySelector('.login');
const slider = document.querySelector('.slider');
const formSection = document.querySelector('.form-section');

signup.onclick = () => {
  slider.classList.add('moveslider');
  formSection.classList.add('form-section-move');
};

login.onclick = () => {
  slider.classList.remove('moveslider');
  formSection.classList.remove('form-section-move');
};
