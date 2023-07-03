import {db, ref, set, onValue, child} from "./firebase.js"

const propertyName = document.querySelector('#propertyName')
const propertyLocation = document.querySelector('#propertyLocation')
const propertyRange = document.querySelector('#propertyRange')
const propertyFeatures = document.querySelector('#propertyFeatures')
const propertyDescription = document.querySelector('#propertyDescription')
const allProperty = [propertyDescription,propertyFeatures,propertyLocation,propertyName,propertyRange]
allProperty.forEach(fill => {
    fill.autocomplete = 'off'
})
// //

class HTML{
    getImage(newImage_One,fileOne){
        window.addEventListener('load', function() {
            fileOne.addEventListener('change', function() {
                if (this.files && this.files[0]) {
                    // var img = document.querySelector('img');
                    newImage_One.onload = () => {
                        URL.revokeObjectURL(newImage_One.src);  // no longer needed, free memory
                    }
                    newImage_One.src = URL.createObjectURL(this.files[0]); // set src to blob url
                    // return newImage_One
                }
            });
        });
    }
}
const html = new HTML()

//image_one
const newImage_One = document.createElement('img')
const fileOne = document.querySelector('#imageOne')
html.getImage(newImage_One,fileOne)
//image_two
const newImage_Two = document.createElement('img')
const fileTwo = document.querySelector('#imageTwo')
html.getImage(newImage_Two,fileTwo)
//image_Three
const newImage_Three = document.createElement('img')
const fileThree = document.querySelector('#imageThree')
html.getImage(newImage_Three,fileThree)
//image_Four
const newImage_Four = document.createElement('img')
const fileFour = document.querySelector('#imageFour')
html.getImage(newImage_Four,fileFour)
//video
const newVideo = document.createElement('video')
const filevideo = document.querySelector('#propertyVideo')
html.getImage(newVideo,filevideo)



const form = document.querySelector('form')
form.addEventListener('submit', e => {
    e.preventDefault()

    const submitBtn = document.querySelector('.fixed-bottom-bar button')

    if(propertyName.value.trim() == '' ||
        propertyLocation.value.trim() == '' ||
        propertyRange.value.trim() == '' ||
        propertyFeatures.value.trim() == '' ||
        propertyDescription.value.trim() == '' ||
        newImage_One.src === '' ||
        newImage_Two.src === '' ||
        newImage_Three.src === '' ||
        newImage_Four.src === '' ||
        newVideo.src === ''
        ){
        //show error messages
        ui.invalidateForm()

        //if form is empty, button to be enabled
        submitBtn.disabled = false
    } else {
        set(ref(db, propertyName.value),{
            name_of_property: propertyName.value,
            location_of_property: propertyLocation.value,
            range_of_property: propertyRange.value,
            features_of_property: propertyFeatures.value,
            description_of_property: propertyDescription.value,
            images: {
                image_one: newImage_One.src,
                image_two: newImage_Two.src,
                image_three: newImage_Three.src,
                image_four: newImage_Four.src
            },
            video: newVideo.src
        }).then(() => {
            alert("DATA SAVED SUCCESSFULLY!")
            window.location.href = './confirm.html'
        }).catch(error => {
            alert('UNSUCCESSFUL:' + error)
        })
        //if form is fiiled, button to be disabled
        submitBtn.disabled = true
    }
})


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
}
const ui = new UI()


const val = propertyName.value
export { val }