let header = document.createElement("header")
let headerLogo = document.createElement("img")
let headerNav = document.createElement("nav")

let navBlock = document.createElement("div")

let downArrow = document.createElement("img")
let loginRef = document.createElement("a")
let button = document.createElement("button")

button.id = 'header-button'
button.innerHTML = 'Sign Up'

loginRef.href = 'login.html'
loginRef.target = '_self'
loginRef.innerHTML = 'Login'

loginRef.id = 'login-link'
header.id = 'header'
headerNav.id = 'nav'
navBlock.id = 'nav-links'

downArrow.src = 'icons/down-arrow.png'
downArrow.style.width = '11px'
downArrow.style.height = '6px'

headerLogo.src = 'images/company-logo.png'
headerLogo.style.width = '196px'
headerLogo.style.height = '56px'

let nameLinks = ["Use Cases", "About", "Pricing", "Blog"]

for(x in nameLinks)
{
    let links = document.createElement("a");
    links.className = 'nav-link'
    links.innerHTML = nameLinks[x]
    navBlock.append(links)
}

navBlock.getElementsByClassName('nav-link')[0].append(downArrow)
header.append(headerLogo)
headerNav.append(navBlock)
header.append(headerNav)
header.append(loginRef)
header.append(button)

document.body.appendChild(header)
