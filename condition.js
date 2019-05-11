/**
 * This file is a javascript assignment for pirple.com where i show my knowledge of "if statements" and any other logical operators and data-types
 */

let obj = {
    imortals: ["spirits", "demons", "God"],
    mortals: {
        men:[ "socrates", "polices", "doctors", "programmers"],
        animals:["goats", "chickens", "sheeps", "cows"]
    }
};
if (obj.mortals.hasOwnProperty("men") && ! obj.imortals.includes("men")){
    if(obj.mortals.men.includes("socrates")){
        console.log("socrates is a man and all men are mortals");
    }else{
        console.log("socrates does not belong to men");
    }   
}else{
    console.log("men are not mortals");
}


//Extra credits
let cake = "vanilla";

if (cake === "vanilla" || cake === "chocolate"){
    if(cake === "chocolate"){
        console.log("This cake is chocholate");
    }else{
        console.log("this cake is not chocholate. Therefore, this cake is vanilla. ");
    }
}