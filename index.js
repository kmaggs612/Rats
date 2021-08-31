/*
 * Kristen Maggs
 * 10/21/20
 * Section AE - Dylan McKone
 *
 * This is index.js, a program that allows users to add images when a button is clicked
 * and toggle a shadow when the mouse moves over a certain area
 */

"use strict";

/**
 * adds image when button is clicked and toggles class on "question" when mouse over "change"
 * @param {event} event1 - load
 */
(function() {
  const RAT_NUMBER = 20;

  window.addEventListener("load", init);

  /**
   * initializes the addRat and shadow functions to respond to their respective events
   * @param {event} event2 - click
   * @param {event} event3 - mouseover
   */
  function init() {
    let button = document.querySelector("button");
    let change = document.getElementById("change");
    button.addEventListener("click", addRat);
    change.addEventListener("mouseover", shadow);
  }

  /** adds a random image of a rat */
  function addRat() {
    let section = document.getElementById("rats");
    let img = document.createElement("img");
    img.src = "images/rat" + Math.floor(Math.random() * RAT_NUMBER) + ".png";
    img.alt = "rat";
    section.appendChild(img);
  }

  /** toggles "color" class on "question" */
  function shadow() {
    let question = document.getElementById("question");
    question.classList.toggle("color");
  }

})();