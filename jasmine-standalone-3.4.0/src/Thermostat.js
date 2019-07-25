
function Thermostat() {
  this.DEFAULT_TEMP = 20
  this.temperature = this.DEFAULT_TEMP
  this.MIN_TEMP = 10
  this.MAX_TEMP_PSM_OFF = 32
  this.MAX_TEMP_PSM_ON = 25
  this.PSM = true
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
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
  };
  return this.temperature === this.MAX_TEMP_PSM_OFF;
};

Thermostat.prototype.reset = function() {
  this.temperature = this.DEFAULT_TEMP;
}

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low-usage';
  }
  if (this.temperature > this.MAX_TEMP_PSM_ON) {
    return 'high-usage';
  }
  return 'medium-usage';
}
