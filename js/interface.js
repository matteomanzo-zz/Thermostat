console.log("Hello");

var thermostat = new Thermostat();

$(document).ready(function() {
  $('#temperature').text(thermostat.temperature);

  $('.increase-temp').on('click', function() {
    thermostat.increaseTemperature(1);
    $('#temperature').text(thermostat.temperature);
  });

});
