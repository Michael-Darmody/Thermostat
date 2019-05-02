describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('Starts at 20 degrees', function() {
    expect(thermostat.temp).toEqual(20);
  });

  it('Increases the temprature by 1 degree', function() {
    thermostat.up();
    expect(thermostat.temp).toEqual(21);
  });

  it('Decreases the temprature by 1 degree', function() {
    thermostat.down();
    expect(thermostat.temp).toEqual(19);
  });

  it('Checks the minimum temprature', function() {
    for (i = 0; i < 10; i++) {
    thermostat.down();
    }
    expect(thermostat.down).toThrowError(TypeError, "You reached the minimum temprature!");
  });

  it('Checks the Power saving maximum temprature', function() {
    for (i = 0; i < 5; i++) {
    thermostat.up();
    }
    expect(thermostat.up).toThrowError(TypeError, "You reached the maximum temprature!");
  });

  it('Turns off powersave mode', function() {
    thermostat.PSMoff();
    expect(thermostat.PSM).toEqual(false);
    expect(thermostat.MaxTemp).toEqual(32);
  });

  it('Turns on powersave mode', function() {
    thermostat.PSMoff();
    thermostat.PSMon();
    expect(thermostat.PSM).toEqual(true);
    expect(thermostat.MaxTemp).toEqual(25);
  });
});
