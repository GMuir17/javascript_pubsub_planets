const PubSub = require("../helpers/pub_sub.js");

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:planet', (evt) => {
    const planetName = evt.detail;
    const foundPlanet = this.findPlanetByName(planetName);
    console.log(foundPlanet);
  });
};

SolarSystem.prototype.findPlanetByName = function (name) {
 for (planet of this.planets) {
   if (planet.name === name) {
     return planet;
   }
 };

};
module.exports = SolarSystem;
