function Thermostat() {
  this.temp = 20
  this.MinTemp = 10
  this.MaxTemp = 25
  this.PSM = true
};

Thermostat.prototype.increase = function() {
  if(this.temp === this.MaxTemp){
    throw new TypeError ("You reached the maximum temprature!");
  };
    this.temp = this.temp + 1
};

Thermostat.prototype.decrease = function() {
  if(this.temp === this.MinTemp){
    throw new TypeError ("You reached the minimum temprature!");
  };
    this.temp = this.temp - 1
  };

Thermostat.prototype.off = function() {
  this.PSM = false
  this.MaxTemp = 32
};
