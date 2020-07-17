//Question-01
//Feet to Mile
function feetToMile(feet){
    if(feet<0){   
        return "Mile can't be negative. Try again.";
    }
    else{
        var mile = feet * 0.000189394;
        return mile;
    }   
}

var mile = feetToMile(2000);
if(mile>=0){
    mile=mile.toFixed(3);
    console.log("Total mile is:",mile);
}
else{
   console.log(mile);
}


//Question-02
//Wood Calculation
function woodCalculator(chair,table,bed){
    if(chair<0 || table<0 || bed<0){
        return "Wrong input, Try again. Try again."
    }
    else{
        var wood = ((1*chair)+(3*table)+(5*bed));
        return wood;
    }
   
}
var wood = woodCalculator(5,2,2);
if(wood>=0){
    console.log("Total",wood,"cubic feet wood is needed");
}
else{
    console.log(wood);
}


//Question-03
//Bricks calculation
function brickCalculator(floor){
    var brick;
    if(floor>=1 && floor<=10){
        brick = (floor*15*1000);
        return brick;
    }
    else  if(floor>=11 && floor<=20){
        brick = ((10*15*1000) +((floor-10)*12*1000));
        return brick;
    }
    else  if(floor>=21){
        brick = ((10*15*1000) +(10*12*1000) +((floor-20)*10*1000));
        return brick;
    }
    else{
        return "Wrong input, Try again."
    }
}
var brick = brickCalculator(22);
if(brick>=0){
    console.log("Total bricks need:",brick);
}
else{
    console.log(brick);
}


//Question-04
//Tiny Friend
function tinyFriend(friendsName){
    var small = friendsName[0];
    var smallLength = friendsName[0].length;
    if (friendsName !=" " ){
        for(var i=1;i<friendsName.length;i++){
            var element = friendsName[i];
            var elementLength = element.length;
            if(elementLength<smallLength){
                small = element;
            }
        }
        return small;
    }
    else{
        console.log("wrong input. Try again.");
    }
    
}

var smallFriend = tinyFriend(["Asif", "Aka","Monirul"]);
console.log("Smallest name is:",smallFriend);
