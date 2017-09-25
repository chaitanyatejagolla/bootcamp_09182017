import colorNamer from 'color-namer';

export class Car {
  constructor(carData) {
    Object.assign(this, carData);
  }

  getFormattedPrice() {
    console.log(this);
    return '$ ' + this.price;
  }

  getColorName() {
    return colorNamer(this.color).html[0].name;
  }
}