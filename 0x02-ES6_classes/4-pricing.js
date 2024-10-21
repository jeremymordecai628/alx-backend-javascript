import Currency from "./3-currency";

export default class  Pricing{
    constructor(amount, currency) {
        this._amount = this._validateAmount(amount);
        this._currency = this._validateCurrency(currency);
    }
    get amount(){
        return  this._amount;
    }
    set amount(newAmount){
        this._amount = this._validateamount(newAmount)
    }
    get currency(){
        return this._currency
    }
    set currency(newCurrency){
        this._currency = this._validateCurrency(newCurrency)
    }
    // Method to display the full price format "amount currency_name (currency_code)"
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert the price based on the conversion rate
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }

  // Validation methods
  _validateAmount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    return amount;
  }

  _validateCurrency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be a Currency object');
    }
    return currency;
  }
}