const contacts = document.querySelector(".contacts");
const stickyHeader = document.querySelector(".stickyHeader");
const items = contacts.getElementsByClassName("contact");

function addContacts() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 50000; i++) {
    const child = document.createElement("div");
    child.textContent = i;
    child.classList.add("contact");
    fragment.appendChild(child);
  }
  contacts.appendChild(fragment);
}

contacts.addEventListener("scroll", (e) => {
  const topItemIndex = Math.round(contacts.scrollTop / 20);
  stickyHeader.textContent = items[topItemIndex].textContent;
});

addContacts();