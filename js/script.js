import { Car } from "./Сar.js";

// Задание №1 

// let newToy = new Toy("Машинка","3+","499");

// Задание №2
//создание массива с объектами
let cars = [
  new Car("BMV", "2000", "150000"),
  new Car("Lada", "1980", "250000"),
  new Car("BMV", "2005", "500000"),
  new Car("BMV", "2020", "400000"),
];
console.log(cars);

//сортировка массива
cars.sort((a, b) => b.age - a.age);
cars.forEach((item) => console.log(`${item}`));

//марка
let marka = "Lada";
let carsMarks = cars.filter((item) => item.name == marka);
carsMarks.forEach((item) => console.log(`Машина марки ${marka}: ${item.toString()}`));

//самые старые автомобили
let year = 10000;
cars.forEach(item => {
  if(item.age < year){
    year = item.age;
  }
})
let oldCars = cars.filter((item) => item.age == year);
oldCars.forEach((item) => console.log(`Самая старая машина: ${item.toString()}`));
