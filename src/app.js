const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const SelectView = require('./views/select_view.js')
const PlanetInfoView = require('./views/planet_info_view.js')

document.addEventListener('DOMContentLoaded', () => {


  const mercuryElement = document.querySelector(".planets-menu");
  const selectView = new SelectView(mercuryElement);
  selectView.bindEvents();
  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();
  const planetContainer = document.querySelector('#planets')
  const planetInfoView = new PlanetInfoView(planetContainer);
  planetInfoView.bindEvents();
});
