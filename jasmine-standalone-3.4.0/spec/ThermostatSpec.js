
describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('Starts at 20 degrees', function() {
    expect(thermostat.temp).toEqual(20);
  });

  it('Increses the temprature by 1 degree', function() {
    thermostat.increase();
    expect(thermostat.temp).toEqual(21);
  });

});
