export default function createContactPage() {
    const contactPage = document.createElement("div");
    contactPage.id = "contact";

    const heading = document.createElement("h1");
    const contactBlock = document.createElement("div");
    const phoneNumber = document.createElement("p");
    const email = document.createElement("p");

    contactBlock.classList.add("contactBlock");

    heading.textContent = "Contact Us!"
    phoneNumber.textContent = "(NON) EXI-STNT";
    email.textContent = "dontemailthis@not.real"

    contactBlock.appendChild(phoneNumber);
    contactBlock.appendChild(email);

    contactPage.appendChild(heading);
    contactPage.appendChild(contactBlock);

    return contactPage;
}