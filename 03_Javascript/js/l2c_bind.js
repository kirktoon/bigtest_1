this.car = "Honda Civic";

var myGarage = {
    car: "Mustang",
    getCar: function() {
        return this.car;
    }
};

console.log(myGarage.getCar());
var car4Later = myGarage.getCar;
console.log(car4Later());

var realGetCar = myGarage.getCar.bind(myGarage);
console.log(realGetCar());