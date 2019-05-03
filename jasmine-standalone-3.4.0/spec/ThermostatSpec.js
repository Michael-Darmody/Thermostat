describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('Starts at 20 degrees', function() {
    expect(thermostat.currentTemp()).toEqual(20);
  });

  it('Increases the temperature by 1 degree', function() {
    thermostat.up();
    expect(thermostat.currentTemp()).toEqual(21);
  });

  it('Decreases the temperature by 1 degree', function() {
    thermostat.down();
    expect(thermostat.currentTemp()).toEqual(19);
  });

  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
    thermostat.down();
    }
    expect(thermostat.currentTemp()).toEqual(10);
  });


  describe('when power saving mode is on', function() {
    it('has a maximum temperature of 25 degrees', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.currentTemp()).toEqual(25);
    });
  });

  describe('when power saving mode is off', function() {
    it('has a maximum temperature of 32 degrees', function() {
      thermostat.PSMOff();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.currentTemp()).toEqual(32);
    });
  });

  it('has power saving mode on by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch PSM off', function() {
    thermostat.PSMOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch PSM back on', function() {
    thermostat.PSMOff();
    thermostat.PSMOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });
});
