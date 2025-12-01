
let article = document.createElement('article');
article.id = 'sign-in';

let textBlock = document.createElement('div');
textBlock1.className = 'sign-in_textblock';

let h1 = document.createElement('h1');
h1.style.fontWeight = '600';
h1.style.fontSize = '75px';
h1.textContent = 'Sign up';

let desc = document.createElement('p');
desc.textContent = 'Fill all field for create an account.';

textBlock1.appendChild(h1);
textBlock1.appendChild(desc);
article.appendChild(textBlock1);

// Форма
const form = document.createElement('form');
form.id = 'sign-in_form';
form.method = 'POST';

// Поле Username
const usernameP = document.createElement('p');
usernameP.className = 'style_input';

const usernameInput = document.createElement('input');
usernameInput.className = 'style_form-input';
usernameInput.type = 'text';
usernameInput.placeholder = 'Username';
usernameInput.required = true;

const usernameImg = document.createElement('img');
usernameImg.className = 'style_form-image';
usernameImg.src = 'User.png';
usernameImg.alt = '';
usernameImg.style.height = '30.31px';
usernameImg.style.width = '25.31px';

usernameP.appendChild(usernameInput);
usernameP.appendChild(usernameImg);
form.appendChild(usernameP);

// Поле Email
const emailP = document.createElement('p');
emailP.className = 'style_input';

const emailInput = document.createElement('input');
emailInput.className = 'style_form-input';
emailInput.type = 'email';
emailInput.placeholder = 'Email Address';
emailInput.required = true;

const emailImg = document.createElement('img');
emailImg.className = 'style_form-image';
emailImg.src = 'At_sign.png';
emailImg.alt = '';
emailImg.style.height = '30.31px';
emailImg.style.width = '30.31px';

emailP.appendChild(emailInput);
emailP.appendChild(emailImg);
form.appendChild(emailP);

// Поле Password
const passwordP = document.createElement('p');
passwordP.className = 'style_input';

const passwordInput = document.createElement('input');
passwordInput.className = 'style_form-input';
passwordInput.type = 'password';
passwordInput.placeholder = 'Password';
passwordInput.required = true;

const passwordImg = document.createElement('img');
passwordImg.className = 'style_form-image';
passwordImg.src = 'Shape-8.png';
passwordImg.alt = '';
passwordImg.style.height = '24px';
passwordImg.style.width = '31px';

passwordP.appendChild(passwordInput);
passwordP.appendChild(passwordImg);
form.appendChild(passwordP);

// Кнопка Sign Up
const button = document.createElement('button');
button.type = 'submit';
button.id = 'button_form';
button.className = 'style_blue-button';
button.textContent = 'Sign Up';

form.appendChild(button);
article.appendChild(form);

// Блок "Or"
const textBlock2 = document.createElement('div');
textBlock2.className = 'sign-in_textblock';

const orH1 = document.createElement('h1');
orH1.textContent = 'Or';

const orDesc = document.createElement('p');
orDesc.textContent = 'Sign Up With...';

textBlock2.appendChild(orH1);
textBlock2.appendChild(orDesc);
article.appendChild(textBlock2);

// Кнопки соцсетей
const buttonsSection = document.createElement('section');
buttonsSection.id = 'sign-in_buttons-field';

const socialButtons = [
  { img: 'Facebook.png', text: 'Sign up with Facebook' },
  { img: 'G_logo.png', text: 'Sign up with Google' },
  { img: 'Apple_logo.png', text: 'Sign up with Apple' }
];

socialButtons.forEach(btn => {
  const button = document.createElement('button');
  button.className = 'style_verydark-button';

  const img = document.createElement('img');
  img.src = btn.img;
  img.alt = '';

  button.appendChild(img);
  button.appendChild(document.createTextNode(btn.text));

  buttonsSection.appendChild(button);
});

article.appendChild(buttonsSection);

// Ссылка "Already have an account?"
const link = document.createElement('span');
link.id = 'sign-in_str';
link.textContent = 'Already have an account? Please Log in.';

article.appendChild(link);

document.body.appendChild(article);
