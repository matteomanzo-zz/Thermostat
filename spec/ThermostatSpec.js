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

  describe('toggle button', function() {

    it('should change the savinPower status from true to false', function() {
      expect(thermostat.powerSaving).toBe(true);
      thermostat.powerSavingToggle();
      expect(thermostat.powerSaving).toBe(false);
    });

    it('should change the savingPower status from true to false and to true again', function() {
      expect(thermostat.powerSaving).toBe(true);
      thermostat.powerSavingToggle();
      expect(thermostat.powerSaving).toBe(false);
      thermostat.powerSavingToggle();
      expect(thermostat.powerSaving).toBe(true);
    });

  });

  describe('power saving mode', function() {

    it('should be on by default', function() {
      expect(thermostat.powerSaving).toEqual(true);
    });

    it('max temperature should be 32 degrees when powerSaving off', function() {
      expect(thermostat.powerSaving).toEqual(true);
      thermostat.powerSavingToggle();
      thermostat.increaseTemperature(15);
      expect(thermostat.temperature).toEqual(32);
    });

    it('max temperature should be 25 degrees when powerSaving on', function() {
      expect(thermostat.powerSaving).toEqual(true);
      thermostat.increaseTemperature(15);
      expect(thermostat.temperature).toEqual(25);
    });

  });

});
