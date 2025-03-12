export default function createMenuPage() {
    const menu = [
        {
            item: "Black Tea",
            description: "a classic",
            price: 5
        },
        {
            item: "Oolong Tea",
            description: "a classic",
            price: 5
        },
        {
            item: "Jasmine Tea",
            description: "a classic",
            price: 5
        },
        {
            item: "Green Tea",
            description: "a classic",
            price: 5
        },
        {
            item: "Thai Tea",
            description: "a classic",
            price: 5
        },
        {
            item: "Earl Grey Tea",
            description: "a classic",
            price: 5
        },
        {
            item: "Pearlescent Tea",
            description: "our house special",
            price: 5
        },
        {
            item: "Strawberry Tea",
            description: "fruit tea",
            price: 5
        },
        {
            item: "Mango Tea",
            description: "fruit tea",
            price: 5
        },
        {
            item: "Peach Tea",
            description: "fruit tea",
            price: 5
        },
    ];

    const menuPage = document.createElement("div");
    menuPage.id = "menu";

    const heading = document.createElement("h1");
    const container = document.createElement("div");

    container.classList.add("card-container");

    heading.textContent = "Menu";

    menuPage.appendChild(heading);

    menu.forEach((i) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const itemName = document.createElement("h2");
        const description = document.createElement("p");
        const price = document.createElement("p");

        description.classList.add("card-description");

        itemName.textContent = i.item;
        description.textContent = i.description;
        price.textContent = "$" + i.price;

        card.appendChild(itemName);
        card.appendChild(description);
        card.appendChild(price);

        container.appendChild(card);
    });

    menuPage.appendChild(container);

    return menuPage;
}