/*The sum of a range
Write a range function that takes two arguments, start and end, and
returns an array containing all the numbers from start up to (and including) end.
Next, write a sum function that takes an array of numbers and returns
the sum of these numbers. Run the previous program and see whether
it does indeed return 55.
As a bonus assignment, modify your range function to take an optional
third argument that indicates the “step” value used to build up the
array. If no step is given, the array elements go up by increments of
one, corresponding to the old behavior. The function call range(1, 10, 2)
should return [1, 3, 5, 7, 9]. Make sure it also works with negative step
values so that range(5, 2, -1) produces [5, 4, 3, 2].*/

//My Solution
function range(start, end, step) {
  var myArray = [];
  if ((arguments.length === 3) && (start < end)) {
    for (var i = start; i <= end; i+=step) {
      myArray.push(i);
    }
    return myArray;
  } else if (arguments.length === 3 && (start > end)) {
    for (var i = start; i >= end; i+=step) {
      myArray.push(i);
    }
    return myArray;
  } else if (start > end) {
    for (var i = start; i >= end; i--) {
      myArray.push(i);
    }
    return myArray;
  } else {
    for (var i = start; i <= end; i++) {
      myArray.push(i);
    }
    return myArray;
  }
}

function sum (numArray) {
  var sum = 0;
  for (var i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return sum;
}

console.log(range(2, 8, 3));


/*Reversing an Array
Arrays have a method reverse, which changes the array by inverting
the order in which its elements appear. For this exercise, write two
functions, reverseArray and reverseArrayInPlace. The frst, reverseArray, takes
an array as argument and produces a new array that has the same
elements in the inverse order. The second, reverseArrayInPlace, does what
the reverse method does: it modifes the array given as argument in order
to reverse its elements. Neither may use the standard reverse method.*/

//My Solution
function reverseArray (myArray) {
  var newArray = [];
  var popped, size = 0;
  size = myArray.length;
  for (var i = 0; i < size; i++) {
    popped = myArray.pop();
    newArray.push(popped);
  }
  return newArray;
}

function reverseArrayInPlace(myArray) {
  var size;
  size = myArray.length;
  for (var i = size; i >= 0; i--) {
    myArray.push(myArray[i]);
  }
  for (var j = 0; j < (size + 1); j++) {
    myArray.shift();
  }
  return myArray;
}

console.log(reverseArray([1,2,3,4,5,6,7,8,9]));
console.log(reverseArrayInPlace([1,2,3,4,5,6,7,8,9]));

/*A List
Objects, as generic blobs of values, can be used to build all sorts of data
structures. A common data structure is the list (not to be confused with
the array). A list is a nested set of objects, with the frst object holding
a reference to the second, the second to the third, and so on.
var list = {
value : 1,
rest : {
value : 2,
rest : {
value : 3,
rest : null
}
}
};
Write a function arrayToList that builds up a data structure like the
previous one when given [1, 2, 3] as argument, and write a listToArray
function that produces an array from a list. Also write the helper
functions prepend, which takes an element and a list and creates a new
list that adds the element to the front of the input list, and nth, which
takes a list and a number and returns the element at the given position
in the list, or undefined when there is no such element.
If you haven’t already, also write a recursive version of nth. */


//My Solution
function arrayToList (myArray) {
  var list = null;
  size = myArray.length - 1;
  for (var i = size; i >= 0; i--) {
    list = {value: myArray[i], rest: list}
  }
  return list;
}

function listToArray (myList) {
  var myArray = [];
  for (var i = myList; i; i=i.rest) {
      myArray.push(i.value);
  }
  return myArray;
}

function prepend (element, myList) {
  newlist = {};
    newlist = {value: element, rest: myList};
  return newlist;
}

function nth (myList, num) {
  var myArray = [];
  for (var i = myList; i; i=i.rest) {
    myArray.push(i.value);
  }
  if (num > myArray.length || num < 0) {
    return undefined;
  } else {
    return myArray[num];
  }
}

function nthp (myList, num) {
  if (!(myList)) {
    return undefined;
  } else if (num === 0) {
    return myList.value;
  } else {
    return nthp(myList.rest, num-1);
  }
}
console.log(listToArray(arrayToList([4, 5, 6, 8, 9])));
console.log(prepend(10, prepend(20, null)));
console.log(nthp(arrayToList([10,20,30]), 1));
console.log(nthp(arrayToList([10,20,30]), 1));
