function calculateApptDates(){
    const expDueDate = document.getElementById('exp-due-date-input').value;



    const upcomingAppts = document.getElementById('upcoming-appts');
    upcomingAppts.innerHTML = expDueDate;
}