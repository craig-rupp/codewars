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

