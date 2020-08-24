//Map Method

//For Loop for doubling numbers in array
var numbers = [1,2,3,4];
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2)
};

console.log(doubledNumbers);

//Refactor for Mapping

var doubled = numbers.map(function(number) {
  return number * 2;
});

console.log(doubled);

//Complex Problem
var cars = [
  { model: 'Buick', price: 'cheap' },
  { model: 'Honda', price: 'affordable' }
]

var prices = cars.map(function(car) {
  return car.price
})

console.log(prices)

//Challenge 1 - Plucking Values
//Using map, create a new array the contains the height property of each object

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image) {
  return image.height
})

console.log(heights)

//Challenge 2 - Calculating Values 
//Using map, create a new array the contains the distance/time property of each object

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip) {
  return trip.distance / trip.time
})

console.log(speeds)

//Challenge 3 - Implement a Pluck function

var paints = [
  { color: 'red' },
  { color: 'orange' },
  { color: 'blue' }
]

//Solution 1- Arrow function
function pluck(array, property) {
    return array.map(obj => obj[property])
}
console.log(pluck(paints, 'color'))

//Solution 2 - Normal Function
function pluck2(array, property) {
    return array.map(function (obj) {
    return obj[property]
    })
}

console.log(pluck(paints, 'color'))