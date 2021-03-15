function localScope(){
    var myVariable = "I am here!";
    console.log(myVariable);
}
localScope()
if (typeof myVariable !="undefined"){
    console.log("outside localScpoe", myVariable);

} else{
    console.log("outside localScope UNDEFINED!!!");
}

module.exports = localScope;