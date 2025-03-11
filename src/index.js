import "./styles.css"
import createHomePage from "./home"

function main() {
    const content = document.querySelector("div#content");
    const homePage = createHomePage();

    const pages = (function () {
        const loadHomePage = () => {
            content.textContent = "";
            content.appendChild(homePage);
        }

        return { loadHomePage };
    })();

    pages.loadHomePage();
}

main();