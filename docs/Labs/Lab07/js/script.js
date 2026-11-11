function init() {
    var actionButton = document.getElementById("entrybutton");
    
    actionButton.addEventListener("click", function () {
        var userInput = document.getElementById("entryinput").value;
    
        alert("Herbst: " + userInput);
        
        document.getElementById("textoutput").innerHTML = userInput;
    }); //function
} //init

window.addEventListener('load', init);