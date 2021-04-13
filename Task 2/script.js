/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
// Variables
let button = document.querySelector('#btn__element');
let output = document.querySelector('#btn__state');
let num = 0;
// Functions
function getSumOfClicks() {
    num++
     return output.innerText = num
}
// Events
button.addEventListener('click', getSumOfClicks)