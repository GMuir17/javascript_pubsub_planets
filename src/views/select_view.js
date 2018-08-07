const PubSub = require("../helpers/pub_sub.js");

const SelectView = function (elements) {
  this.elements = elements;
};

SelectView.prototype.bindEvents = function () {
  console.log(this.elements);
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
