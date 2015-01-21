var thermostat = new Thermostat();

var updateTemperature = function() {
  $('#temperature').text(thermostat.temperature);
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
  });

  $('.PSM-toggle').on('click', function() {
    thermostat.powerSavingToggle();
    updateTemperature();
    $(this).css('color','red');
  });

});
