var Thermostat = function() {
  this.temperature = 20;
  this.minimumTemp = 10;
  this.maximumTemp = 32;
  this.powerSaving = false;

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

Thermostat.prototype.powerSavingOn = function() {
  this.powerSaving = true;
};

// Thermostat.prototype.? = function(changeTempBy) {
//   if ((this.temperature + changeTempBy) > this.minimumTemp){
//     return
//   }
// };
