import { removeActiveFromOtherBtns, photoCredit } from './home.js'

function createMenuSlideshow() {
    let section = document.createElement('section');
    let menuArr = ["Dinner", "Wine", "Beverages", "Seafood", "Foreign Cuisines"];
    for (let i = 0; i < menuArr.length; i++) {
        let div = document.createElement('div');
        let link = document.createElement('a');
        link.href = "#";
        link.className = "background h-100 text-white d-flex justify-content-center align-items-center menu-items";
        link.textContent = menuArr[i];
        if (i === 4) {
            div.className = "menu foreign";
        } else {
            div.className = `menu ${menuArr[i]}.toLowerCase`;
        }
        div.appendChild(link)
        section.appendChild(div);
    }
    return section;
}

function createFooter() {
    let footer = document.createElement('footer');
    let address = ["Monday - Sunday", "9AM - 10PM", "231 Allen Avenue, Brooklyn NY"];
    let icons = ["fab fa-twitter mr-2", "fab fa-facebook-f mr-2", "fab fa-instagram mr-2", "fab fa-linkedin-in"]
    let socialLinks = document.createElement('div');
    socialLinks.className = "text-center mb-2";
    thirdDiv.className = "d-flex justify-content-center align-items-center flex-column p-3";
    for (let i = 0; i < address.length; i++) {
        let par = document.createElement('p');
        par.textContent = address[i];
        footer.appendChild(par);
    }
    footer.appendChild(socialLinks);
    for (let i = 0; i < icons.length; i++) {
        let link = document.createElement('a');
        let iconElem = document.createElement('i');
        link.href = "#";
        link.className = "text-white";
        iconElem.className = icons[i];
        link.appendChild(iconElem);
        socialLinks.appendChild(link);
    }
    footer.appendChild(photoCredit());
    return footer;
}

function menuFunc(e) {
    document.querySelector('.menu-btn').id = "active";
    removeActiveFromOtherBtns(e.target);
    let content = document.queryElement('#content');
    content.appendChild(createMenuSlideshow());
    content.appendChild(createFooter());
}
export default menuFunc