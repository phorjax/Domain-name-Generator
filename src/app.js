/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let DomainGen = () => {
    var Noun = ["history", "away", "art"];
    var Adjective = ["agreed", "adore", "had"];
    var Pronoun = ["I", "she", "we"];

    for (let i = 0; i < Pronoun.length; i++) {
      document.querySelector("#DomainGen").innerHTML = Pronoun[i];

      for (let j = 0; j < i.length; j++) {
        // document.querySelector("#excuse").innerHTML = excuseGen();
      }
    }
  };
};
