let myFunction = (name) => {
    let inputedName=name;
    if (typeof inputedName == "string"){
        let obj = {
            imortals: ["spirits", "demons", "God"],
            mortals: {
                men:[ "socrates", "polices", "doctors", "programmers"],
                animals:["goats", "chickens", "sheeps", "cows"]
            }
        };
        if (obj.mortals.hasOwnProperty("men") && ! obj.imortals.includes("men")){
            if(obj.mortals.men.includes(inputedName)){
                console.log(inputedName +" is a man and all men are mortals");
            }else{
                console.log("your entry does not belong to men");
            }   
        }else{
            console.log("men are not mortals");
        }
    }else{
        console.log("your entry is not a name, please enter a name");
    }
}
myFunction("socrates");


