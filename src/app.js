const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const SelectView = require('./views/select_view.js')

document.addEventListener('DOMContentLoaded', () => {

  
  const mercuryElement = document.querySelector("#Mercury");
  const selectView = new SelectView(mercuryElement);
  selectView.bindEvents();
  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();
});
