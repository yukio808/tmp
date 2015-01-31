var students = [
  {
    name : "Mario",
    score : 20
  },
  {
    name : "Luigi",
    score : 22
  },
  {
    name : "Samus",
    score : 12
  },
  {
    name : "Kirby",
    score : 98
  },
  {
    name : "Starfox",
    score : 23
  },
  {
    name : "Link",
    score : 23
  },
  {
    name : "Yoshi",
    score : 86
  }
];

var fibonacci = [0,0,1,1,2,3,5,8,13,21,34,55,89];

// Callback function
function double_number ( current, index, array ) {
  return current * 2;
}

//                                          v------ Callback function
var double_fibonacci = fibonacci.map( double_number );

var quadruple_fibonacci = double_fibonacci.map( double_number );

var student_names = students.map( function (current, index, array) {
  return current.name;
});

var changed_names = students.map( function ( current, index ) {
  current.position = index;
  return current;
})

var high_scorers = students.filter( function ( current ) {
  return current.score > 25;
}).map( function ( element ) {
  element.name = element.name.toLowerCase();
  return element;
});

var all_scores = 0;
for (var i = students.length - 1; i >= 0; i--) {
  all_scores += students[i].score;
};

// PCIA
var all_scores = students.reduce( function ( previous, current, index, array) {
  return previous + current.score;
}, 0);
//console.log(all_scores);

var smushed_names = students.reduce( function ( previous, current ) {
  return previous + " : " + current.name;
}, "XXXXXX============>" );
//console.log(smushed_names)

var sum_of_percents = students.map( function ( current, index, array) {
  return current.score / 100;
});
//console.log('sum_of_percents',sum_of_percents);
sum_of_percents.reduce(function ( prev, cur ) {
  return prev + cur;
}, 0);

var double_score = students.map( function (current){
  return current.score * 2;
});
//console.log(double_score);