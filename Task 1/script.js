/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

// Variables 
let output = document.querySelector('#output');
let form = document.querySelector('form');
let input = document.querySelector('#search')

// Functions
function getCalculated(e) {
    e.preventDefault();
    let lb = (input.value * 2.2046).toFixed(2);
    let g = input.value / 0.0010000;
    let oz = (input.value * 35.274).toFixed(2);

    output.innerHTML = `
    <div> Svarai(lb) = ${lb}lb </div>
    <div> Gramai(g) = ${g}g </div>
    <div> Uncijos(oz) = ${oz}oz</div>
    `
    input.value = '';
}

// Events
form.addEventListener('submit', getCalculated)
