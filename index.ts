export { };

// Create a "close" button and append it to each list item
const myNodelist: HTMLCollectionOf<Element> = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  const span: HTMLElement = document.createElement("SPAN");
  const txt: Text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
const closeButtons: HTMLCollectionOf<Element> = document.getElementsByClassName("close");
for (i = 0; i < closeButtons.length; i++) {
  let closeButton: Element = closeButtons[i];

  removeListItem(closeButton);
}

// Add a "checked" symbol when clicking on a list item
const list: HTMLUListElement | null = document.querySelector('ul');
if (list) {
  list.addEventListener('click', (event) => {
    let target: HTMLElement = <HTMLElement>event.target;
    if (target && target.tagName === 'LI') {
      target.classList.toggle('checked');
    }
  }, false);
}

const addBtn: HTMLElement | null = document.getElementById('addBtn');
addBtn?.addEventListener('click', () => {
  newElement();
});

// Create a new list item when clicking on the "Add" button
function newElement(): void {
  const li: HTMLLIElement = document.createElement("li");
  const input: HTMLInputElement = <HTMLInputElement>document.getElementById("myInput");
  if (!input) return;
  const inputValue = input.value;
  const textNode = document.createTextNode(inputValue);
  li.appendChild(textNode);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    const ul = document.getElementById("myUL");
    if (ul) {
      ul.appendChild(li);
    }
  }
  input.value = "";

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  removeListItem(span);
}

//Remove list item when clicking on the close btn
function removeListItem(elem: Element): void {
  elem.addEventListener('click', () => {
    let li = elem.parentElement;
    if (li) {
      li.style.display = "none";
    }
  });
}