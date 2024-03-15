function display_orig_date(){
    let userInput = document.getElementById("exp-due-date-input")
    
    document.getElementById("dates-output").innerHTML = userInput.value;
}