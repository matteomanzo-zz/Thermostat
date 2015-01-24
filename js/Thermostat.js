var Thermostat = function() {
  this.temperature = 20;
  this.minimumTemp = 10;
  this.powerSaving = true;
  this.savingOffMaxTemp = 32;
  this.savingOnMaxTemp = 25;
  this.toggleStatus = "ON";
};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  if (((this.temperature + changeTempBy) > this.savingOnMaxTemp) && this.powerSaving){
    return this.temperature = this.savingOnMaxTemp;
  }
  else if (((this.temperature + changeTempBy) > this.savingOffMaxTemp) && this.powerSaving === false) {
    return this.temperature = this.savingOffMaxTemp;
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

Thermostat.prototype.reset = function() {
  this.temperature = 20;
  this.powerSaving = true;
  this.toggleStatus = "ON";
};

Thermostat.prototype.powerSavingToggle = function() {
  (this.powerSaving) ? (this.powerSaving = false) : (this.powerSaving = true)
  if ((this.powerSaving) && (this.temperature > 25)) {this.temperature = this.savingOnMaxTemp};
  (this.powerSaving) ? (this.toggleStatus = "ON") : (this.toggleStatus = "OFF")
};

Thermostat.prototype.colorStatus = function() {
  if (this.temperature < 18) {
    return "low-usage"
  }
  else if (this.temperature > 25) {
    return "high-usage"
  }
  else {
    return "medium-usage"
  }
};
