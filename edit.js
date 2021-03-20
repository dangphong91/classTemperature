let myTemperature = function(celsius) {
    this.celsius = celsius;
    this.getCToF = function() {
        return (celsius * 1.8 + 32);
    }
    this.getCToK = function() {
        return (celsius + 273.15);
    }
}
let temper = new myTemperature(25);
let f = temper.getCToF();
let k = temper.getCToK();
document.write(`C - F : ${f} <br> C - K : ${k}`);