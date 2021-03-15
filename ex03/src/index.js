function function1() {
notGlobalVariable = 5;
    
}
    var myGlobalVariable = 10;
    function function2() {
        var result ="";
        if (typeof myGlobalVariable != "undefined"){
            result += "myGlovalVariable: " + myGlobalVariable;
        }
        if (typeof notGlobalVariable != "undefined"){
            result += " notGlobalVariable: " + notGlobalVariable;
        }
        console.log(result);
    }
    function1();
    function2();
        
