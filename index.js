let inputEl = document.getElementById("input-el")
const submitEl = document.getElementById("submit-el");
const clearEl = document.getElementById("clear-el");
var count = [];
let ulEl = document.getElementById("ul-el")
let arrayList = [];
let msg = JSON.parse(localStorage.getItem("msg"))

if (msg) {
    arrayList = msg;
    renderList()
}

submitEl.addEventListener("click", function () {
    console.log("true")
    let activity = inputEl.value;
    arrayList.push(activity);
    localStorage.setItem("msg", JSON.stringify(arrayList))
    inputEl.value = ""
    renderList();
})

function clearAll() {

    arrayList = []
    localStorage.clear("msg")
    renderList()
}

function renderList() {
    let storeList = ""
    let save = "Completed"
    for (let a = 0; a < arrayList.length; a++) {
        storeList += `<li >${arrayList[a]}
     <button class="deleted1" id=${a}  onClick="clear1(${a})" >${save}</button> 
     </li>`;
    }
    ulEl.innerHTML = storeList;

}
function clear1(a) {
    console.log(a)
    arrayList.splice(a, 1)
    localStorage.clear
    localStorage.setItem("msg", JSON.stringify(arrayList))
    renderList();
    
}