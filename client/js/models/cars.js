
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
}