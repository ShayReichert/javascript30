const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

const deleteAll = document.querySelector("#delete-all");
const checkedAll = document.querySelector("#checked-all");
const unCheckedAll = document.querySelector("#unchecked-all");

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  setLocalStorage(items);
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
        <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done && "checked"
      } />
            <label for="item${i}">${plate.text}</label>
            <button data-index=${i} class="delete">X</button>
        </li>`;
    })
    .join("");
}

function handleClick(e) {
  if (e.target.matches("input")) {
    toggleDone(e);
  } else if (e.target.matches(".delete")) {
    deleteItems(e);
  }
}

function toggleDone(e) {
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  setLocalStorage(items);
}

function deleteItems(e) {
  const index = e.target.dataset.index;
  items.splice([index], 1);
  setLocalStorage(items);
}

function handleDeleteAll(e) {
  items.splice(0, items.length);
  itemsList.innerHTML = "";
  setLocalStorage(items);
}

function handleCheckedAll(e) {
  items.map((item) => {
    item.done = true;
  });
  setLocalStorage(items);
}

function handleunCheckedAll(e) {
  items.map((item) => {
    item.done = false;
  });
  setLocalStorage(items);
}

function setLocalStorage(items) {
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

unCheckedAll.addEventListener("click", handleunCheckedAll);
checkedAll.addEventListener("click", handleCheckedAll);
deleteAll.addEventListener("click", handleDeleteAll);
addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", handleClick);

populateList(items, itemsList);
