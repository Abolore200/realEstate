//get the appointment details from the local storage
const getLS = JSON.parse(localStorage.getItem('appointment'))

//get the last object in the array
const pop = getLS.pop()

//create a new div for the appointment
const details = document.createElement('div')
details.classList.add('con-appointment')
details.innerHTML = `
    <div class="client-name appoint">
        <p>Name</p>
        <p>${pop?.client}</p>
    </div>
    <div class="date appoint">
        <p>Date</p>
        <p>${pop?.date}</p>
    </div>
    <div class="time appoint">
        <p>Time</p>
        <p>${pop?.time}</p>
    </div>
`;

const showDetails = document.querySelector('.show-details')

//append *details* into the html
showDetails.appendChild(details)