const propertyName = document.querySelector('#propertyName')
const propertyLocation = document.querySelector('#propertyLocation')
const propertyRange = document.querySelector('#propertyRange')
const propertyFeatures = document.querySelector('#propertyFeatures')
const propertyDescription = document.querySelector('#propertyDescription')
const allProperty = [propertyDescription,propertyFeatures,propertyLocation,propertyName,propertyRange]
allProperty.forEach(fill => {
    fill.autocomplete = 'off'
})
//

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

                    console.log(newVideo);
                    return newImage_One                
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
//

const newVideo = document.createElement('video')
const filevideo = document.querySelector('#propertyVideo')
html.getImage(newVideo,filevideo)



const form = document.querySelector('form')
form.addEventListener('submit', e => {
    e.preventDefault()

    if(propertyName.value.trim() == '' ||
        propertyLocation.value.trim() == '' ||
        propertyRange.value.trim() == '' ||
        propertyFeatures.value.trim() == '' ||
        propertyDescription.value.trim() == '' ||
        newImage_One.src === '' ||
        newImage_Two.src === '' ||
        newImage_Three.src === '' ||
        newImage_Four.src === '' ||
        newVideo.src === ''){
        //show error messages
        ui.invalidateForm()
    } else {
        if(window.location.href = './confirm.html'){
            const getProperty = {
                name: propertyName.value,
                location: propertyLocation.value,
                range: propertyRange.value,
                features: propertyFeatures.value,
                description: propertyDescription.value,
                image: {
                    image_one: newImage_One.src,
                    image_two: newImage_Two.src,
                    image_three: newImage_Three.src,
                    image_four: newImage_Four.src
                },
                video: newVideo.src
            }
            ui.saveProperty(getProperty);
        }
        // window.location.href = './confirm.html'
    }
})