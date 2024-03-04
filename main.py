import datetime
from pyscript import document

def my_function(event):
    input_text = document.querySelector("#exp-due-date-input")
    date = input_text.value

    output_div = document.querySelector("#dates-output")
    output_div.innerText = date.value