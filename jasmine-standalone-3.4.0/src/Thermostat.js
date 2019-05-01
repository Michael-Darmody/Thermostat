function Thermostat() {
  this.temp = 20
  this.MinTemp = 10
  this.PSOnMax = 25
  this.PSOn = true
};

Thermostat.prototype.increase = function(){
  if(this.temp === this.PSOnMax){
    throw new TypeError ("You reached the maxiimum temprature!");
  };
    this.temp = this.temp + 1
};

Thermostat.prototype.decrease = function(){
  if(this.temp === this.MinTemp){
    throw new TypeError ("You reached the minimum temprature!");
  };
    this.temp = this.temp - 1
  };
