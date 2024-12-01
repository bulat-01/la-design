const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('e-mail');
const question = document.getElementById('question');
const btnPrivacyPolicy = document.querySelector('.form__consent-text span');
const popupPrivacyPolicy = document.querySelector('.popup-privacy-policy');
const btnClosePrivacyPolicy = document.querySelector('.popup-privacy-policy__button-close');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validateInputs()) {
        
    }
})

function setError(element, message) {
    const formLine = element.parentElement;
    const errorDisplay = formLine.querySelector('.form__line-error')

    errorDisplay.textContent = message;
    formLine.classList.add('error');
    formLine.classList.remove('success');
}

function setSuccess(element) {
    const formLine = element.parentElement;
    const errorDisplay = formLine.querySelector('.form__line-error')

    errorDisplay.textContent = '';
    formLine.classList.add('success');
    formLine.classList.remove('error');
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateInputs() {
    const userNameValue = userName.value;
    const emailValue = email.value;
    const questionValue = question.value;
    let flag = false;

    flag = userNameValue === '' || userNameValue.length < 3 || userNameValue.length > 30 
        ? (setError(userName, 'Имя пользователя должно содержать от 3 до 30 символов'), false) 
        : (setSuccess(userName), true);

    flag = !(isValidEmail(emailValue))
        ? (setError(email, 'Неверный формат email. Попробуйте еще раз'), false)
        : (setSuccess(email), true);

    flag = questionValue.length > 300 
        ? (setError(question, 'Вопрос должен быть не более 300 сиволов'), false) 
        : (setSuccess(question), true);

    return flag;
}

btnPrivacyPolicy.addEventListener('click', (event) => {
    popupPrivacyPolicy.classList.add('active');
    body.classList.add('body_lock');
})

btnClosePrivacyPolicy.addEventListener('click', (event) => {
    popupPrivacyPolicy.classList.remove('active');
    body.classList.remove('body_lock');
})