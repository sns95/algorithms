/* 
Return true if the string in the first element of the array contains all 
of the letters of the string in the second element of the array.
*/

function mutation(arr){
  //var arr = ["voodoo", "no"];
  var firstWord = [];
  var secondWord = [];


  //stores each letter in the array
  for(var i =0; i < arr[0].length; i++){
    firstWord.push(arr[0].charAt(i).toLowerCase());
  }
  console.log(firstWord);


  //stores each letter in the array
  for(var j=0; j < arr[1].length; j++){
    secondWord.push(arr[1].charAt(j).toLowerCase());
  }
  //secondWord.toLowerCase();
  console.log(secondWord);


  //check to see if first array contains all of the letters in the second
  //element of the array


  var newArr = [];
  for(var n = 0; n < secondWord.length; n++){
    newArr.push(firstWord.indexOf(secondWord[n]));
  }
  console.log(newArr);


  var justice = true;
  for(var k = 0; k < newArr.length; k++){
    if(newArr[k] < 0){
      justice  = false;
    }
  }

  console.log(justice);
  return justice;
}



mutation(["hello", "hey"]);
