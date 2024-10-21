const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    // Assign the attributes to private properties
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the current car instance
  cloneCar() {
    // Use the [cloneSymbol] method to create a new instance with the same class
    const ClonedCar = this[cloneSymbol]();
    return new ClonedCar();
  }

  // Private symbol-based method to return the constructor of the current instance
  [cloneSymbol]() {
    return this.constructor;
  }
}
