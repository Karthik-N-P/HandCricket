
let count=0;  //counting runs
let over=0;   //counting overs
function myFunction(val){

    var computer= Math.floor(Math.random()*6)+1;  //math.random() generates random number between 0 and 1 math.floor() rounds off the number to nearest integer
    document.getElementById("cbtn").value=computer; //displaying random number genrated in button below Computer
    document.getElementById("pbtn").value=val; //displaying value of button clicked in button below Player
    if((over<0.6 )&&(val!=computer)){    //checking if over is less than 1(since this a super over) and if player and computer values are not equal
        
        over=over+0.1;  //incrementing over by 0.1
        let n=over.toFixed(1);  //converting over to string and rounding off to 1 decimal place
        document.getElementById("overs").innerHTML= "OVER"+n;   //displaying over in overs div

        document.getElementById("vsbtn").value= val;   //displaying value of button clicked in button below VS
        count=count+val;  //incrementing count by value of button clicked(runs)
        document.getElementById("rw").innerHTML= "Score: "+count;
    }
    else{  //if over is 1 or player and computer values are equal(out)
        document.getElementById("vsbtn").value="Game Over";
        document.getElementById("rw").innerHTML= "Total Runs ";
        document.getElementById("overs").innerHTML= count;
        count=0;  //resetting runs to 0
        n=0;  //resetting over to 0
        over=0;   //resetting over to 0
        return;   //returning from function
    }

}