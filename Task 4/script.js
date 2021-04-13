/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
// Variables
const ENDPOINT = 'cars.json';
const output = document.querySelector('#output');

// Functions
function showCars() {
    fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
        data.forEach(car => {
            output.innerHTML += `
            <div class='carsContainer'> 
                <h2>Brand ${car.brand} </h2>
                <div class='modelsContainer'> 
                <h3> Models: </h3>
                <div> ${car.models}</div>
                </div>
            </div>
            `
        })
    })
}
// Events
window.addEventListener('DOMContentLoaded', showCars)

