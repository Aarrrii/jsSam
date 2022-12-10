//1 способ
// export class Car {
//   constructor(name, year, price) {
//     this.name = name;
//     this.year = year;
//     this.price = price;
//   }
//   get age(){
//     return new Date().getFullYear() - this.year;
//   }
//   toString() {
//     return `Марка автомобиля- ${this.name}, выпускался в ${this.year} году, Стоимость: ${this.price} рублей`;
//   }
// }

//2 способ
export function Car(name, year, price) {
  this.name = name;
  this.year = year;
  this.price = price;
}
const methodsCar = {
  toString() {
    return `Марка автомобиля- ${this.name}, выпускался в ${this.year} году, Стоимость: ${this.price} рублей`;
  },
};
Object.assign(Car.prototype, methodsCar);

Object.defineProperties(Car.prototype, {
  age: {
    get() {
      return new Date().getFullYear() - this.year;
    },
  },
});
