export default class Building {
    constructor(sqft) {
      // Validate and assign the square footage attribute
      this._sqft = this._validateSqft(sqft);
  
      // If this class is being instantiated directly, throw an error
      if (this.constructor !== Building && !this.evacuationWarningMessage) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  
    // Getter for sqft
    get sqft() {
      return this._sqft;
    }
  
    // Validation method for sqft
    _validateSqft(sqft) {
      if (typeof sqft !== 'number') {
        throw new TypeError('Square footage must be a number');
      }
      return sqft;
    }
  }
  