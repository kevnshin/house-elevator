/*jslint node: true */
'use strict';


module.exports = {
  goto: function(currentFloor, targetFloor){

    var amtFloors = 0;

/*
    //if either is not a number
    if((isNaN(currentFloor))||(isNaN(targetFloor))){

        return 0;

    }

    //if it's an array
    else if((currentFloor instanceof Array)||(targetFloor instanceof Array)){
      return 0;

    }*/


    //if they are numbers
    if((currentFloor instanceof Number)||(targetFloor instanceof Number)){

      if((currentFloor>3)||(currentFloor<0)||(targetFloor>3)||targetFloor<0)
      {
        return 0;

      }
    
      amtFloors = targetFloor-currentFloor;

      return amtFloors;

    }


    else{
      return 0;
    }    





  } //ends goto function


};
