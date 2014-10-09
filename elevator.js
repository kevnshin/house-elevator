/*jslint node: true */
'use strict';


module.exports = {
  goto: function(currentFloor, targetFloor){

    var amtFloors = 0;

    


    if((typeof currentFloor === 'number')&&(typeof targetFloor === 'string')){

      
      targetFloor = Number(targetFloor);


      amtFloors = targetFloor-currentFloor;

      if(currentFloor>3||currentFloor<0||targetFloor>3||targetFloor<0){
        return 0;
      }

      return amtFloors;

    }else{//Current floor not a number & target floor not a String
      return 0;
    }

  } //ends goto function


};
