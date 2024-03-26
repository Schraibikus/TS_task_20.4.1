/* Если экспорт не убирать, то выдает ошибку в файле index.js при запуске
Uncaught SyntaxError: Unexpected token 'export' (at index.js:69:1)
export {}; */

// Create a "close" button and append it to each list item
const myNodelist: HTMLCollectionOf<Element> =
  document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  const span: HTMLElement = document.createElement("SPAN");
  const txt: Text = document.createTextNode("\u00D7");
  span.className = "close";
  span.append(txt);
  myNodelist[i].append(span);
}

// Click on a close button to hide the current list item
const closeButtons: HTMLCollectionOf<Element> =
  document.getElementsByClassName("close");
for (i = 0; i < closeButtons.length; i++) {
  let closeButton: Element = closeButtons[i];
  closeButton.addEventListener("click", () => {
    const li = closeButton.parentElement;
    if (!!li) {
      li.style.display = "none";
    }
  });
}

// Add a "checked" symbol when clicking on a list item
const list: HTMLUListElement | null = document.querySelector("ul");
if (list) {
  list.addEventListener(
    "click",
    function (ev) {
      let target: HTMLElement = <HTMLElement>ev.target;
      if (target) {
        if (target.tagName === "LI") {
          target.classList.toggle("checked");
        }
      }
    },
    false
  );
}

// Create a new list item when clicking on the "Add" button
function addNewElement(): void {
  const li: HTMLElement = document.createElement("li");
  const input: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("myInput")
  );
  if (!input) return;
  const inputValue = input.value;

  const textNode: Text = document.createTextNode(inputValue);
  li.append(textNode);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    const ul = document.getElementById("myUL");
    if (ul) {
      ul.append(li);
    }
  }
  input.value = "";

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.append(txt);
  li.append(span);

  span.addEventListener("click", () => {
    const li = span.parentElement;
    if (!!li) {
      li.style.display = "none";
    }
  });
}

const addBtn: HTMLElement | null = document.getElementById("addBtn");
addBtn?.addEventListener("click", () => {
  addNewElement();
});
