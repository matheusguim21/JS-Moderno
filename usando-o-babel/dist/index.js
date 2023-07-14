"use strict";

var average = function average() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  return (numbers.reduce(function (acumulador, numero) {
    return acumulador + numero;
  }, 0) / numbers.length).toFixed(2);
};
var weightedAverage = function weightedAverage() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  var sum = entries.reduce(function (acumulador, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return acumulador + number * (weight !== null && weight !== void 0 ? weight : 1);
  }, 0);
  var weightSums = entries.reduce(function (acumulador, entry) {
    var _entry$weight;
    return acumulador + ((_entry$weight = entry.weight) !== null && _entry$weight !== void 0 ? _entry$weight : 1);
  }, 0);
  return (sum / weightSums).toFixed(2);
};
var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var orderedNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  var middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }
  if (orderedNumbers.length % 2 === 0) {
    var firstMedian = orderedNumbers[middle - 1];
    var secondMedian = orderedNumbers[middle];
    return Math.floor(average(firstMedian, secondMedian));
  }
};
var mode = function mode() {
  for (var _len4 = arguments.length, number = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    number[_key4] = arguments[_key4];
  }
  var quantities = number.map(function (num) {
    return [num, number.filter(function (n) {
      return num === n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log('Média aritmética: ', average(1, 2, 3, 4, 5, 6));
console.log('Mediana:  ', median(1, 2, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8));
console.log('Moda: ', mode(1, 1, 1, 1, 1, 1, 4, 4, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7));
console.log('Média Ponderada:', weightedAverage({
  number: 9,
  weight: 3
}, {
  number: 7
}, {
  number: 10,
  weight: 1
}));