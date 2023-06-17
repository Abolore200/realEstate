class UI{
    invalidateForm(){
        ui.setError()
    }
    setError(){
        const propertyHome = document.querySelector('form .all-property')

        const errorMsg = document.createElement('div')
        errorMsg.classList.add('setError')
        errorMsg.innerHTML = '<p class="error">fill all inputs</p>' 
        form.insertBefore(errorMsg, propertyHome)
        //remove div after 3 secs
        setTimeout(() => {
            errorMsg.remove()
        },3000)
    }
    saveProperty(getProperty){
        let property = this.getPropertyLS()
        property.push(getProperty)
        localStorage.setItem('property',JSON.stringify(property))
    }
    getPropertyLS(){
        let property;
        let propertyLS = localStorage.getItem('property')
        if(propertyLS === null){
            property = []
        } else {
            property = JSON.parse(propertyLS)
        } return property
    }
}
const ui = new UI()