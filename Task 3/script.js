/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
// Variables
const ENDPOINT = 'https://api.github.com/users';
const message = document.querySelector('#message');
const output = document.querySelector('#output');
const btn = document.querySelector('#btn');

// Functions
function showUsers() {
    fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
        message.style.display = 'none';
        data.forEach(user => {
        output.innerHTML += `
        <div class='container'>
        <h2>Login: ${user.login} </h2>
        <img src='${user.avatar_url}'>
        </div>
        `
       })
    });

    
}
// Events
btn.addEventListener('click', showUsers)
