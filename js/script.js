// Created by: Lucas Tyman
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-04-/sw.js", {
    scope: "/ICS2O-Assignment-04-/",
  })
}

;("use strict")

/**
 * This function calculates the pizza price.
 */
function total() {
  // input
  const large = document.getElementById("size-large").checked
  const extraLarge = document.getElementById("size-extra-large").checked
  const oneTopping = document.getElementById("first-topping").checked
  const twoTopping = document.getElementById("two-toppings").checked
  const threeTopping = document.getElementById("three-toppings").checked
  const fourTopping = document.getElementById("four-toppings").checked

  // process
  const taxRate = 1.13
  var pizzaSize = 0
  var pizzaTopping = 0

  if (large == true) {
    pizzaSize = 6.0
  } else if (extraLarge == true) {
    pizzaSize = 10.0
  }

  if (oneTopping == true) {
    pizzaTopping = 1.0
  } else if (twoTopping == true) {
    pizzaTopping = 1.75
  } else if (threeTopping == true) {
    pizzaTopping = 2.5
  } else if (fourTopping == true) {
    pizzaTopping = 3.35
  }

  totalCost = (pizzaSize + pizzaTopping) * taxRate

  // output
  document.getElementById("total-cost").innerHTML =
    "The total cost of the pizza will be: $" + totalCost.toFixed(2)
}