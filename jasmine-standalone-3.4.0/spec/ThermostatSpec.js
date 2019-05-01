describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('Starts at 20 degrees', function() {
    expect(thermostat.temp).toEqual(20);
  });

  it('Increases the temprature by 1 degree', function() {
    thermostat.increase();
    expect(thermostat.temp).toEqual(21);
  });

  it('Decreases the temprature by 1 degree', function() {
    thermostat.decrease();
    expect(thermostat.temp).toEqual(19);
  });

  it('Checks the minimum temprature', function() {
    for (i = 0; i < 10; i++) {
    thermostat.decrease();
    }
    expect(thermostat.decrease).toThrowError(TypeError, "You reached the minimum temprature!");
    });

  it('Checks the Power saving maxiimum temprature', function() {
    for (i = 0; i < 5; i++) {
    thermostat.increase();
    }
    expect(thermostat.increase).toThrowError(TypeError, "You reached the maxiimum temprature!");
    });
});
