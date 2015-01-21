var Thermostat = function() {
  this.temperature = 20;
  this.minimumTemp = 10;
  this.powerSaving = true;
  this.savingOffMaxTemp = 32;
  this.savingOnMaxTemp = 25;
};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  if ((this.temperature + changeTempBy) > this.maximumTemp) {
    return this.temperature = this.maximumTemp;
  }
  else {
    return this.temperature += changeTempBy;
  };
};

Thermostat.prototype.decreaseTemperature = function(changeTempBy) {
  if ((this.temperature - changeTempBy) < this.minimumTemp) {
    return this.temperature = this.minimumTemp;
  }
  else {
    return this.temperature -= changeTempBy;
  };
};

Thermostat.prototype.powerSavingToggle = function() {
  (this.powerSaving) ? this.powerSaving = false : this.powerSaving = true;
};
