import "./styles.css"
import createHomePage from "./home"
import createMenuPage from "./menu";

function main() {
    const content = document.querySelector("div#content");
    const homeButton = document.querySelector("#home-btn");
    const menuButton = document.querySelector("#menu-btn");
    const contactButton = document.querySelector("#contact-btn");
    const homePage = createHomePage();
    const menuPage = createMenuPage();

    const pages = (function () {
        const loadHomePage = () => {
            content.textContent = "";
            homeButton.classList.add("selected");
            menuButton.classList.remove("selected");
            contactButton.classList.remove("selected");
            content.appendChild(homePage);
        }
        const loadMenuPage = () => {
            content.textContent = "";
            homeButton.classList.remove("selected");
            menuButton.classList.add("selected");
            contactButton.classList.remove("selected");
            content.appendChild(menuPage);
        }

        return { loadHomePage, loadMenuPage };
    })();

    pages.loadHomePage();

    homeButton.addEventListener("click", pages.loadHomePage);
    menuButton.addEventListener("click", pages.loadMenuPage);
}

main();