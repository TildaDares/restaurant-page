import { removeActiveFromOtherBtns, photoCredit } from './home.js'

function createSection() {
    let section = document.createElement('section');
    let containerDiv = document.createElement('div');
    let firstDiv = document.createElement('div');
    section.className = "contact";
    containerDiv.className = "contact-bg h-100 text-white d-flex justify-content-between align-items-center flex-column";
    section.appendChild(containerDiv);
    containerDiv.appendChild(firstDiv);
    containerDiv.appendChild(contact());
    containerDiv.appendChild(address());
    return section;
}

function contact() {
    let secondDiv = document.createElement('div');
    let secondDivParOne = document.createElement('p');
    let telIcon = document.createElement('i');
    let telSpan = document.createElement('span');
    let emailSpan = document.createElement('span');
    let emailIcon = document.createElement('i');
    let secondDivParTwo = document.createElement('p');
    secondDivParOne.appendChild(telIcon);
    secondDivParOne.appendChild(telSpan);
    secondDivParTwo.appendChild(emailIcon);
    secondDivParTwo.appendChild(emailSpan);
    secondDiv.appendChild(secondDivParOne);
    secondDiv.appendChild(secondDivParTwo);
    secondDiv.appendChild(socials());
    telIcon.className = "fas fa-phone-alt fa-2x mr-4";
    emailIcon.className = "fas fa-at fa-2x mr-4";
    emailSpan.className = "contact-details";
    telSpan.className = "contact-details";
    telSpan.textContent = "+234-XXX-XXX-XXXX";
    emailSpan.textContent = "shadowssupport@gmail.com";
    return secondDiv;
}

function socials() {
    let icons = ["fab fa-twitter mr-2", "fab fa-facebook-f mr-2", "fab fa-instagram mr-2", "fab fa-linkedin-in"];
    let socialLinks = document.createElement('div');
    socialLinks.className = "text-center social-links pt-3";
    for (let i = 0; i < icons.length; i++) {
        let link = document.createElement('a');
        let iconElem = document.createElement('i');
        link.href = "#";
        link.className = "text-white";
        iconElem.className = icons[i];
        link.appendChild(iconElem);
        socialLinks.appendChild(link);
    }
    return socialLinks;
}

function address() {
    let thirdDiv = document.createElement('div');
    let address = ["Monday - Sunday", "9AM - 10PM", "231 Allen Avenue, Brooklyn NY"];
    thirdDiv.className = "d-flex justify-content-center align-items-center flex-column p-3";
    for (let i = 0; i < address.length; i++) {
        let par = document.createElement('p');
        par.textContent = address[i];
        thirdDiv.appendChild(par);
    }
    thirdDiv.appendChild(photoCredit());
    return thirdDiv;
}

function contactFunc(e) {
    document.querySelector('.contact-btn').id = "active";
    removeActiveFromOtherBtns(e.target);
    let tab = document.querySelector('.tab-content');
    tab.innerHTML = "";
    tab.appendChild(createSection());
}
export default contactFunc