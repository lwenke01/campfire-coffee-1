// My javascript lives in here
// OBJECT LITERALS
console.log('my js is connected');

// Test object, just for funsies
var rubberDuck = {
  material: 'rubber',
  color: 'yellow',
  squeaks: false,
  favoriteFoods: ['duckweed', 'peanut butter', 'little children'],
  says: function() {
    console.log('quack');
  }
};

// Objects for coffee store locations
// Build just one for starters
var pike = {
  parameter1: 'value',
  parameter2: 'value',
  parameter3: true
};

var paragraphEl = document.createElement('p');
var tableEl = document.createElement('table');
var tableDataEl = document.createElement('td');

paragraphEl.innerHTML = rubberDuck.says();
document.body.appendChild(paragraphEl);
