
let article = document.createElement("article");
article.id = 'sign-in';

let textBlock1 = document.createElement("div");
textBlock1.className = 'sign-in_textblock';

let h1SignUp = document.createElement("h1");
h1SignUp.style.fontWeight = '600';
h1SignUp.style.fontSize = '75px';
h1SignUp.textContent = 'Sign up';

let description = document.createTextNode("Fill all field for create an account.");

textBlock1.appendChild(h1SignUp);
textBlock1.appendChild(description);

article.appendChild(textBlock1);

let form = document.createElement("form");
form.id = 'sign-in_form';
form.method = 'POST';
form.action = '';


let usernameP = document.createElement("p");
usernameP.className = 'style_input';

let usernameInput = document.createElement("input");
usernameInput.className = 'style_form-input';
usernameInput.type = 'text';
usernameInput.placeholder = 'Username';
usernameInput.required = true;

let usernameImg = document.createElement("img");
usernameImg.className = 'style_form-image';
usernameImg.src = 'icons/User.png';
usernameImg.alt = '';
usernameImg.height = 30.31;
usernameImg.width = 25.31;

usernameP.appendChild(usernameInput);
usernameP.appendChild(usernameImg);
form.appendChild(usernameP);

let emailP = document.createElement("p");
emailP.className = 'style_input';

let emailInput = document.createElement("input");
emailInput.className = 'style_form-input';
emailInput.type = 'email';
emailInput.placeholder = 'Email Address';
emailInput.required = true;

let emailImg = document.createElement("img");
emailImg.className = 'style_form-image';
emailImg.src = 'icons/At_sign.png';
emailImg.alt = '';
emailImg.height = 30.31;
emailImg.width = 30.31;

emailP.appendChild(emailInput);
emailP.appendChild(emailImg);
form.appendChild(emailP);

let passwordP = document.createElement("p");
passwordP.className = 'style_input';

let passwordInput = document.createElement("input");
passwordInput.className = 'style_form-input';
passwordInput.type = 'password';
passwordInput.placeholder = 'Password';
passwordInput.required = true;

let passwordImg = document.createElement("img");
passwordImg.className = 'style_form-image';
passwordImg.src = 'Shape-8.png';
passwordImg.alt = '';
passwordImg.height = 24;
passwordImg.width = 31;

passwordP.appendChild(passwordInput);
passwordP.appendChild(passwordImg);
form.appendChild(passwordP);


let signUpButton = document.createElement("button");
signUpButton.type = 'submit';
signUpButton.id = 'button_form';
signUpButton.className = 'style_blue-button';
signUpButton.textContent = 'Sign Up';

form.appendChild(signUpButton);
article.appendChild(form);


let textBlock2 = document.createElement("div");
textBlock2.className = 'sign-in_textblock';

let h1Or = document.createElement("h1");
h1Or.textContent = 'Or';

let orDescription = document.createTextNode('Sign Up With...');

textBlock2.appendChild(h1Or);
textBlock2.appendChild(orDescription);

article.appendChild(textBlock2);


let buttonsSection = document.createElement("section");
buttonsSection.id = 'sign-in_buttons-field';


let fbButton = document.createElement("button");
fbButton.className = 'style_verydark-button';

let fbImg = document.createElement("img");
fbImg.src = 'icons/Facebook.png';
fbImg.alt = '';

let fbText = document.createTextNode('Sign up with Facebook');

fbButton.appendChild(fbImg);
fbButton.appendChild(fbText);


let googleButton = document.createElement("button");
googleButton.className = 'style_verydark-button';

let googleImg = document.createElement("img");
googleImg.src = 'icons/G_logo.png';
googleImg.alt = '';

let googleText = document.createTextNode("Sign up with Google");

googleButton.appendChild(googleImg);
googleButton.appendChild(googleText);

let appleButton = document.createElement("button");
appleButton.className = 'style_verydark-button';

let appleImg = document.createElement("img");
appleImg.src = 'icons/Apple_logo.png';
appleImg.alt = '';

let appleText = document.createTextNode("Sign up with Apple");

appleButton.appendChild(appleImg);
appleButton.appendChild(appleText);

buttonsSection.appendChild(fbButton);
buttonsSection.appendChild(googleButton);
buttonsSection.appendChild(appleButton);


article.appendChild(buttonsSection);


let loginLink = document.createElement("span");
loginLink.id = 'sign-in_str';
loginLink.textContent = 'Already have an account? Please Log in.';

article.appendChild(loginLink);

document.body.appendChild(article);
