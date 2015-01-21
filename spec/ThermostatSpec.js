describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('by default', function() {

    it('starts at 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it('minimum temperature is 10 degrees', function() {
      expect(thermostat.minimumTemp).toEqual(10);
    });
  });

  describe('changing temperature', function() {

    it('can increase', function() {
      thermostat.increaseTemperature(1);
      expect(thermostat.temperature).toEqual(21);
    });

    it('can decrease', function() {
      thermostat.decreaseTemperature(1);
      expect(thermostat.temperature).toEqual(19);
    });

    it('should not go under 10 degrees', function() {
      thermostat.decreaseTemperature(11);
      expect(thermostat.temperature).toEqual(10);
    });

  });

  describe('power saving mode', function() {

    it('should be able to be switched on and off', function() {
      expect(thermostat.powerSaving).toEqual(false);
      thermostat.powerSaving(true);
      expect(thermostat.powerSaving).toEqual(true);
    });

  });

});
