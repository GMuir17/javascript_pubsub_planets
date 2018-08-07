const PubSub = require("../helpers/pub_sub.js");

const PlanetInfoView = function(container){
  this.container = container;
};

PlanetInfoView.prototype.bindEvents = function() {
  PubSub.subscribe('SolarSystem:selectedPlanet', (evt) => {
    const planet = evt.detail;
    this.render(planet);
  });
};

PlanetInfoView.prototype.render = function(planet) {
  this.container.innerHTML = "";
  const planetList = document.createElement('ul');
  this.container.appendChild(planetList);
  for (property in planet) {
    const planetListItem = document.createElement('li');
    planetListItem.textContent = `${property}: ${planet[property]}`
    planetList.appendChild(planetListItem);
  }

};



module.exports = PlanetInfoView;
