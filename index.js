const { returns } = require("chai-spies");

function receivesAFunction (val) {
    return val();
}
receivesAFunction(function() {return console.log("callback func is called")});
console.log(receivesAFunction(() => 'Olga' + 'Alex'));

function returnsANamedFunction() {
    return (function sayHi() {console.log("Hi!")});
}
returnsANamedFunction()();

function returnsAnAnonymousFunction() {
    return function() {return "it's from anonym func from returning"};
}
console.log(returnsAnAnonymousFunction()());

function returnsAnArrowFunction() {
    return () => "it's from arrow func from returning";
}
console.log(returnsAnArrowFunction()());