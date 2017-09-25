
export class Cars {
  constructor(carList) {
    this._cars = carList;
  }

  sortCars(prop, type) {
    if (type === 'number') {
      return this._cars.concat().sort( (a,b) => {
        return a[prop] - b[prop];
      });
    }
    else {
      return this._cars.concat().sort( (a,b) => {
        if(a[prop] > b[prop]){
          return 1;
        } else if(a[prop] < b[prop]) {
          return -1;
        }
        return 0;
      });
    }
  }

  addCar(car) {
    car.id= Math.max(...this._cars.map(c => c.id)) + 1;
    this._cars = this._cars.concat(car);
    return this;
  }

  editCar(car) {
    const carToReplaceIndex = this._cars.findIndex(c=>c.id === car.id);
    this._cars = this._cars.slice(0, carToReplaceIndex).concat(car).concat(this._cars.slice(carToReplaceIndex+1));
    return this;
  }

  deleteCar(carId) {
    const carToDeleteIndex = this._cars.findIndex(c=>c.id === carId);
    this._cars = this._cars.slice(0, carToDeleteIndex).concat(this._cars.slice(carToDeleteIndex+1));
    return this;
  }
}