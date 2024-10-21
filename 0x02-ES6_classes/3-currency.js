export default class Currency  {
    constructor (code, name){
        this._code = this._validateCode(code);
        this._name = this._validateName(name);

    }   
    get code (){
        return this._code;
    } 
    // Setter for code with validation
  set code(newCode) {
    this._code = this._validateCode(newCode);
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name with validation
  set name(newName) {
    this._name = this._validateName(newName);
  }

  // Method to display the full currency format "name (code)"
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  // Validation methods
  _validateCode(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    return code;
  }

  _validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return name;
  }
}
