console.log("Hello");

var thermostat = new Thermostat();

$(document).ready(function() {
  $('#temperature').text(thermostat.temperature);

  $('.increase-temp').on('click', function() {
    thermostat.increaseTemperature(1);
    $('#temperature').text(thermostat.temperature);
  });

  $('.decrease-temp').on('click', function() {
    thermostat.decreaseTemperature(1);
    $('#temperature').text(thermostat.temperature);
  });

  $('.reset').on('click', function() {
    thermostat.reset();
    $('#temperature').text(thermostat.temperature);
  });

  $('.PSM-toggle').on('click', function() {
    thermostat.powerSavingToggle();
    $('#temperature').text(thermostat.temperature);
  });

});
