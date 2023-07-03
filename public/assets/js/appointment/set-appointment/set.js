const submitForm = document.querySelector('form')
submitForm.addEventListener('submit', (e) => {
    const clientName = document.querySelector('#clientName').value
    const chooseDate = document.querySelector('#chooseDate').value
    const chooseTime = document.querySelector('#chooseTime').value

    e.preventDefault()

    if(clientName.trim() === '' || chooseDate.trim() === '' || chooseTime.trim() === ''){

        //prevent form from submitting if the actions required are not met
        e.preventDefault()

        //call the error function when form is empty
        ui.showError()
    } else {
        if(window.location.href = './confirm.html'){
            ui.saveAppiontmentObject(clientName,chooseDate,chooseTime)
        }
    }
})

class UI{
    showError(){
        const clientName = document.querySelector('.client-name')

        //create new error div, it shows when the form is empty
        const error_note = document.createElement('div')
        error_note.classList.add('error')
        error_note.innerHTML = `<p> fill all inputs </p>`

        //insert the error before the form div
        submitForm.insertBefore(error_note,clientName)

        //hide error_note after 3 seconds
        setTimeout(() => {
            error_note.remove()
        },3000)
    }

    saveAppiontmentObject(clientName,chooseDate,chooseTime){
        const arrayAppoinment = {
            client: clientName,
            date: chooseDate,
            time: chooseTime
        }
        this.saveLS(arrayAppoinment)
    }
    saveLS(arrayAppoinment){
        let app = this.getLS()
        app.push(arrayAppoinment)
        localStorage.setItem('appointment', JSON.stringify(app))
    }
    getLS(){
        let app;
        let appLS = localStorage.getItem('appointment')
        if(appLS === null){
            app = []
        } else {
            app = JSON.parse(appLS)
        }
        return app
    }
}
const ui = new UI()
