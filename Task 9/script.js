/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget){
        this.title = title;
        this.director = director;
        this.budget = budget;
    }

    wasExpensive() {
        if(typeof this.budget === 'number' && this.budget > 1e8) {
            return true
        } else {
            return false;
        }
    }
}

let movie1 = new Movie('Titanikas', 'James Cameron', 1e9);

console.log(movie1.wasExpensive());