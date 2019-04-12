/**
 * The difference between var, let and const are as follows
 * Though these three keywords has some little similarities but one thing or the other made them diferent
 * firstly a variable name declared with the "var" keyword can be redeclared and updated.
 * secondly, a variable name declared with the "let" keyword can be updated but cannot be redeclared,
 * finally, a variable name declared with the const keyword neither be redeclared or updated, unless the const keyword is used to declare an object which an attribute of that object can be updated.
 * 
 * The const keyword is used to declare a variable which its value is not intended to be changed, for example while computing the area  of a circle it is nice to declare the variable name that will hold the "pie" value with const keyword. on the other hand the let keyword is more appropriate for declaring the variable to be used in "for loop". and for the var keyword its better applicable when you want to use same variable name in different block scopes so that a variable name decleared in one block scope will not affect the same variable name when declared in another block scope
 * 
 * 
 */

 /**
  * Hoisting.
  * In my understanding, Hoisting is the way variables, functions and classes declaration are been lifted to the top of the local or global scope during runtime, so that they will be recognized in their respective scopes.
  * 
  * for example if we have a code like this;
  * function callMe() {
    console.log('hey ' + myName);
    };
    callMe();
    var myName = 'emmanuel';
    
    it is executed thus during runtime;
    function callMe() {
    console.log('hey ' + myName);
    };
    var myName;
    callMe();
    myName = 'emmanuel';

    At runtime function is being hoisted above variables
  */

 //Example of when to use the const keyword while declaring a variable
 const pie = 3.142;
 let radius = 7;
 let radiusSquared = Math.pow(radius,2);
 let area = pie * radiusSquared;
 console.log("the area of this circle is " + area);
 //N.B pie declaration is so because the value of pie cannot be any other value apart from 3.142



 //Example of when to use the let keyword while declaring a variable
 for(let i = 0; i < 10; i++) {
    setTimeout(function() {
      console.log('The number is ' + i);
    }, 1000);
}
/**
 * The above code will console the following
 *  The number is 0
    The number is 1
    The number is 2
    The number is 3
    The number is 4 and so on

    But it will console The number is 10 if i should replace the let with var.
 */

 //

 function varDeclaration(){
    function firstDeclaration() {
       var varValue = "This is my first declaration";
       console.log(varValue);
    } 
    function secondDeclaration(){
       var varValue = "This is my second declaration";
       console.log(varValue);
    }
    firstDeclaration();
    secondDeclaration();
 }
 varDeclaration();
 /**
  * In the above code i declared same variable in two different block scopes, but no one updated the other or 
  * clashed with the other
  */