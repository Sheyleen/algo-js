/**
Calculates the distance between a point A (a) and a point B (b)
* @param {Number}     The X coordinates of the point A
* @param {Number}     The Y coordinates of the point A
* @param {Number}     The X coordinates of the point B
* @param {Number}     The Y coordinates of the point B
* @return {Number}    Returns the mathematical formula to calculate a distance
*/

function calcDistance(a1, b1, a2, b2) {
  let a = b2 - b1;
  let b = a2 - a1;
  return Math.sqrt(a * a + b * b).toFixed(2);
}

let a1 = 4;
let a2 = -2;
let b1 = 5;
let b2 = 3;
console.log(calcDistance(a1, b1, a2, b2));
