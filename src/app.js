/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  var Noun = ["history", "art"];
  var Adjective = ["adore", "had"];
  var Pronoun = ["I", "she", "we"];
  var dumblist = [];
  for (let i = 0; i < Pronoun.length; i++) {
    for (let j = 0; j < Adjective.length; j++) {
      for (let o = 0; o < Noun.length; o++) {
        dumblist.push(Pronoun[i] + Adjective[j] + Noun[o] + ".com");
      }
    }
  }

  let element = document.querySelector("#DomainGen");
  for (let i = 0; i < dumblist.length; i++) {
    element.innerHTML += "<li>" + dumblist[i] + "</li>";
  }
};
