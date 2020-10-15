const hide = document.getElementById("hide");
const list = document.getElementById("list");
const description = document.getElementById("description");
const input = document.getElementById("input");
const change = document.getElementById("change");
const myList = document.getElementsByTagName("li");

change.addEventListener("click", () => {
  description.innerHTML = input.value + ":";
});

hide.addEventListener("click", () => {
  if (list.style.display == "none") {
    hide.innerHTML = "Hide List";
    list.style.display = "block";
  } else {
    hide.innerHTML = "Show List";
    list.style.display = "none";
  }
});

for (let i = 0; i < myList.length; i++) {
  myList[i].style.color = myList[i].innerHTML;
}
