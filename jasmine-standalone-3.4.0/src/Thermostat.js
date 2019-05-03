function Thermostat() {
  this.temperature = 20
  this.MIN_TEMP = 10
  this.MAX_TEMP_PSM_OFF = 32
  this.MAX_TEMP_PSM_ON = 25
  this.PSM = true
};

Thermostat.prototype.currentTemp = function () {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
}

Thermostat.prototype.down = function() {
  if(this.temperature === this.MIN_TEMP) {
    return;
  };
    this.temperature -= 1
  };

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.PSM === true;
};

Thermostat.prototype.PSMOff = function() {
  this.PSM = false;
};

Thermostat.prototype.PSMOn = function() {
  this.PSM = true;
};

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === true) {
    return this.temperature === this.MAX_TEMP_PSM_ON;
  }
  return this.temperature === this.MAX_TEMP_PSM_OFF;
}
