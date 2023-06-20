import {db, propertyName, propertyLocation, propertyRange, propertyFeatures, propertyDescription, form, set, ref, fileOne}
from "./firebase.js"


form.addEventListener('submit', e => {
    e.preventDefault()

    if(
        propertyName.value.trim() !== '' ||
        propertyLocation.value.trim() !== '' ||
        propertyRange.value.trim() !== '' ||
        propertyFeatures.value.trim() !== '' ||
        propertyDescription.value.trim() !== ''
    ){
        set(ref(db, propertyName.value),{
            name_of_property: propertyName.value,
            location_of_property: propertyLocation.value,
            range_of_property: propertyRange.value,
            features_of_property: propertyFeatures.value,
            description_of_property: propertyDescription.value,
            image_one: fileOne.value
        }).then(() => {
            alert('data stored sucessfully')
        }).catch(error => {
            alert("unsuccessful:" + error)
        })
    }
})

console.log(form);