class Human{
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }
}

class Flat{
    constructor(){
        this.inhabitants = [];
    }

    addInhabitant(Human){
        this.inhabitants.push(Human);
        return this;
    }
}

class House{
    constructor(maxAmountOfFlats){
        this.maxAmountOfFlats = maxAmountOfFlats;
        this.flats = [];
    }

    addFlat(Flat){
        this.flats.length < this.maxAmountOfFlats ? this.flats.push(Flat) : console.log('Max amount of flats reached.');
        return this;
    }
}

let Sasha = new Human('Sasha', 'male');
let Dasha = new Human('Dasha', 'female');

let SashasFlat = new Flat();
SashasFlat.addInhabitant(Sasha);

let DashasFlat = new Flat();
DashasFlat.addInhabitant(Dasha);

let house = new House(50);
house.addFlat(SashasFlat).addFlat(DashasFlat);

// test logs
console.log(Sasha);
console.log(Dasha);

console.log(SashasFlat);
console.log(DashasFlat);

console.log(house);