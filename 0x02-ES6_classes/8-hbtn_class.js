export default class HolbertonClass {
    constructor(size, location) {
      this._size = size;
      this._location = location;
    }
  
    // Override valueOf to return the size
    valueOf() {
      return this._size;
    }
  
    // Override toString to return the location
    toString() {
      return this._location;
    }
  }
  