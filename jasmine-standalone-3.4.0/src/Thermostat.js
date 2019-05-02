function Thermostat() {
  this.temp = 20
  this.MinTemp = 10
  this.MaxTemp = 25
  this.PSM = true
};

Thermostat.prototype.up = function() {
  if(this.temp === this.MaxTemp){
    throw new TypeError ("You reached the maximum temprature!");
  };
    this.temp = this.temp + 1
};

Thermostat.prototype.down = function() {
  if(this.temp === this.MinTemp){
    throw new TypeError ("You reached the minimum temprature!");
  };
    this.temp = this.temp - 1
  };

Thermostat.prototype.PSMoff = function() {
  this.PSM = false
  this.MaxTemp = 32
};

Thermostat.prototype.PSMon = function() {
  this.PSM = true
  this.MaxTemp = 25
};
