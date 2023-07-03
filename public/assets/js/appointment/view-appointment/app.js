//retrieve all appointment from local storage
const allAppointments = JSON.parse(localStorage.getItem('appointment'))

let html = "";
for(let i = 0; i < allAppointments.length; i++){
    //concatenation
    html += `
        <div class="view-appoint">
            <div class="client-name appoint">
                <p> ${allAppointments[i]?.client} </p>
            </div>
            <div class="date appoint">
                <p>Date</p>
                <p> ${allAppointments[i]?.date} </p>
            </div>
            <div class="time appoint">
                <p>Time</p>
                <p> ${allAppointments[i]?.time} </p>
            </div>
        </div>
    `;
}

//append the appointment into the html
const listOfAppointments = document.querySelector('.list-of-appointments')
listOfAppointments.innerHTML = html