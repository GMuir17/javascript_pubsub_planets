const PubSub = require("../helpers/pub_sub.js");

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {

  this.element.addEventListener('click', (evt) => {
    const selectedPlanet = evt.target.id;
    PubSub.publish('SelectView:planet', selectedPlanet);
  });
};

// const mercuryElement = document.querySelector("#Mercury");
//
// elements.createEventListener("onclick", (event) => {
//   const selectedPlanet = event.target.detail;
//   console.log("Hello Ed");
// });


// SelectView.prototype.bindEvents = function () {
//
//   this.
//   PubSub.publish("SelectView:")
// };


module.exports = SelectView;
