function createSplash() {
    const splash = document.createElement("div");
    splash.classList.add("splash");

    const heading = document.createElement("h1");
    const body = document.createElement("p");
    const buttonContainer = document.createElement("div");
    const menuButton = document.createElement("button");
    const orderButton = document.createElement("button");

    heading.textContent = "Enter, PEARLESCENT";
    body.textContent = "Home of the finest quality bubble tea under our moon."
    menuButton.textContent = "View our Menu";
    orderButton.textContent = "Order Online";

    buttonContainer.appendChild(menuButton);
    buttonContainer.appendChild(orderButton);

    splash.appendChild(heading);
    splash.appendChild(body);
    splash.append(buttonContainer);

    return splash;
}

function createAbout() {
    const about = document.createElement("div");
    about.classList.add("about");

    const description = document.createElement("p");

    description.textContent = "Here at Pearlescent, we believe that every drink we serve \
                    will be worth your time and money. With our home-brewed teas, \
                    we want to ensure that you will remember us for our rich taste \
                    and smooth experience forever.";

    about.appendChild(description);

    return about;
}

function createReviews() {
    const reviews = document.createElement("div");
    reviews.classList.add("reviews");

    const reviewBody = document.createElement("p");
    const reviewAuthor = document.createElement("p");

    reviewBody.textContent = "The boba here is so sweet and the vibes are so comforting. \
                            I will be coming back to experience this again soon!"
    reviewAuthor.textContent = "- Gem Tay";

    reviews.appendChild(reviewBody);
    reviews.appendChild(reviewAuthor);

    return reviews;
}

function createInfo() {
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const info = document.createElement("div");
    info.classList.add("info");

    const location = document.createElement("p");
    info.appendChild(location);

    weekdays.forEach((d) => {{
        const day = document.createElement("p");
        day.textContent = d;
        info.appendChild(day);
    }});

    return info;
}

export default function createHomePage() {
    const homePage = document.createElement("div");
    homePage.id = "home";

    const splash = createSplash();
    const about = createAbout();
    const reviews = createReviews();
    const info = createInfo();

    homePage.appendChild(splash);
    homePage.appendChild(about);
    homePage.appendChild(reviews);
    homePage.appendChild(info);

    return homePage;
}