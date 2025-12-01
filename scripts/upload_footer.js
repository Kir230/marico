
var footer = document.createElement("footer");
var image = document.createElement("img");
var navigation = document.createElement("nav");

let name_links = ["About", "Pricing", "Blog", "Sign in"]

for(x in name_links)
{
    let navLink = document.createElement("a")
    navLink.className = 'nav-link'
    navLink.innerHTML = name_links[x]
    navigation.appendChild(navLink)
}

image.src = 'images/fooLogo.png';
image.style.width = '223px'
image.style.height = '105px'

footer.style.display = 'flex'
footer.style.marginTop = '173px'
footer.style.marginBottom = '96px'
footer.style.alignItems = 'center'
footer.style.justifyContent = 'space-between'

navigation.style.fontWeight = '500'
navigation.style.fontSize = '28px'
navigation.style.width = '476px'
navigation.style.display = 'inherit'
navigation.style.justifyContent = 'space-between'

footer.append(image)
footer.append(navigation)
document.body.appendChild(footer)