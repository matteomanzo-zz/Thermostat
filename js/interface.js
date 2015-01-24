var thermostat = new Thermostat();

var updateTemperature = function() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.colorStatus());
  $('#deg').attr('class', thermostat.colorStatus());
};

$(document).ready(function() {
  updateTemperature();

  $('.increase-temp').on('click', function() {
    thermostat.increaseTemperature(1);
    updateTemperature();
  });

  $('.decrease-temp').on('click', function() {
    thermostat.decreaseTemperature(1);
    updateTemperature();
  });

  $('.reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
    $('.PSM-toggle').text(thermostat.toggleStatus);
  });

  $('.PSM-toggle').on('click', function() {
    thermostat.powerSavingToggle();
    updateTemperature();
    $('.PSM-toggle').text(thermostat.toggleStatus);
  });

});
