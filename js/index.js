let userExpDateInput = document.getElementById('exp-due-date-input');
let result = document.getElementById('upcoming-appts');
let weekAwayCounter = document.getElementById('weeks-away-count');

function calculateApptDates(){
    let expDueDate = new Date(userExpDateInput.value);
    
    let month = expDueDate.getMonth() + 1; //we are adding a 1 b/c of how it starts with a 0 padding number
    let day = expDueDate.getUTCDate(); //we're using UTC dates to avoid Daylight Saving Time changes which would return a day early if we only use getDate
    let year = expDueDate.getFullYear();

    result.innerHTML = `${month} / ${day} / ${year}`;
    weekAwayCounter.innerHTML = 'test';
}