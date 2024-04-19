/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our", "your"];
  let adj = ["great", "big", "nice"];
  let noun = ["jogger", "racoon", "rain"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let domainName = pronoun[i] + adj[j] + noun[k] + ".com";
        console.log(domainName);
      }
    }
  }
};