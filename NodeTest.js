function bmi (name) {
    function countBMI (height, weight) {
        console.log("Your name is: " + name + ", and your height is: " + height + ", weight is: " + weight);
    }
    return countBMI;
}

var abmi = bmi("a");
var bbmi = bmi("b");

abmi(169,900);
bbmi(180,100);