// L1: Set Alarm
// // Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

function setAlarm(employed, vacation){
    if (employed === true && vacation !== true){
      return true;
    }else{
      return false;
    }
   
   }


// Grasshopper - Personalized Message

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'


function greet (name, owner) {
  if(name === owner){
    return ('Hello boss')
  }else{
    return ('Hello guest')
  }
}