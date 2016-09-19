use strict;


//Jaden Case Strings - Capitalize every first word 7 kyu

String.prototype.toJadenCase = function () {
  //...
  var arr = this.split(' ');
  arr.forEach(function(element,index,arr){
    var letter = element.substring(0,1);
    element = element.replace(letter,'');
    arr[index] = letter.toUpperCase() + element;
  });
var str = arr.join(' ');
 return str;
};

//first problem

//methods of math -- round, ceil & floor

function roundIt(n){
  var first = n.toString().split(".");
  console.log(first);
  //coding here...
   if(first[0].length > first[1].length){
     return Math.floor(n);
   } else if (first[0].length < first[1].length){
     return Math.ceil(n);
   } 
   return Math.round(n);   
}

// roundIt(Math.ceil(3.45));
// roundIt(Math.floor(3.45));
// roundIt(Math.round(34.56));