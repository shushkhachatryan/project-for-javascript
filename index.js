"use strict";
/*
let car1 = {
  brand: "BMW",
  color: "red",
  engine: "V8",
  showInfo: function () {
    console.log(
      "the car brand is " + car1.brand + " and color is " + car1.color
    );
  },
};

let car2 = car1;

car2.brand = "AUDI";
console.log
*/

/*

//ex1
let car = {
  brand: "Lexus",
  color: "white",
  engine: "EC",
  showBrand: function () {
    console.log("This car is a " + car.brand);
  },
  showColor: function () {
    console.log("The color of this car is " + car.color);
  },
  showEngine: function () {
    console.log("The engine of this car is " + car.engine);
  },
  showInfo: function () {
    console.log(
      "This car is a " +
        car.brand +
        " and the color of this car is " +
        car.color +
        " and the engine of this car is " +
        car.engine
    );
  },
};

car.showBrand();
car.showColor();
car.showEngine();
car.showInfo();


//ex2

let products = {
  shoes: 30000,
  shirt: 15000,
  trousers: 20000,
  skirts: 17000,
  tie: 8000,
  bag: 10000,
  hat: 5000,
  scarf: 6000,
  socks: 1000,
  glove: 3000,
  getSummary: function () {
    return (
      products.shoes +
      products.shirt +
      products.trousers +
      products.skirts +
      products.tie +
      products.bag +
      products.hat +
      products.scarf +
      products.socks +
      products.glove
    );
  },
};
console.log(products.getSummary());


*/
//ex3

let firstName = prompt("enter your firstname");
let lastName = prompt("enter your lastname");
let age = prompt("write down your age");
let isMarried = prompt("you are married?");

let user = {
  firstName,
  lastName,
  age,
  isMarried,
  showMarriesInfo() {
    console.log(
      "My firstname  " +
        this.firstName +
        "my lastname " +
        this.lastName +
        "I am " +
        this.age +
        " years " +
        this.isMarried
    );
  },
};
user.showMarriesInfo();

function bar(obj1) {
  if (obj1.isMarried === "no") {
    alert(false);
  } else if (obj1.isMarried === "yes") {
    alert(true);
  }
}

bar(user);

debugger;
let objNum = {
  value1: 19,
  value2: -112,
  value3: 86,
  value4: -55,
  value5: 36,
  calcPropSum: function () {
    return (
      objNum.value1 +
      objNum.value2 +
      objNum.value3 +
      objNum.value4 +
      objNum.value5
    );
  },

  calcPropOverage: function (obj) {
    let sum = -Infinity;
    let a = 0;
    for (let key in obj) {
      sum += objNum.calcPropSum[key];
      a++;
    }
  },
};
