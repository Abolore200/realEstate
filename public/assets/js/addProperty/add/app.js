// const propertyName = document.querySelector('#propertyName')
// const propertyLocation = document.querySelector('#propertyLocation')
// const propertyRange = document.querySelector('#propertyRange')
// const propertyFeatures = document.querySelector('#propertyFeatures')
// const propertyDescription = document.querySelector('#propertyDescription')
// // const newImage_One = document.querySelector('#imageOne')
// const allProperty = [propertyDescription,propertyFeatures,propertyLocation,propertyName,propertyRange]
// allProperty.forEach(fill => {
//     fill.autocomplete = 'off'
// })

// form.addEventListener('submit', e => {
//     e.preventDefault()

//     const submitBtn = document.querySelector('.fixed-bottom-bar button')

//     if(
//         // propertyName.value.trim() == '' ||
//         // propertyLocation.value.trim() == '' ||
//         // propertyRange.value.trim() == '' ||
//         // propertyFeatures.value.trim() == '' ||
//         // propertyDescription.value.trim() == '' ||
//         newImage_One.src === ''
//         // newImage_Two.src === '' ||
//         // newImage_Three.src === '' ||
//         // newImage_Four.src === '' ||
//         // newVideo.src === ''
//         ){
//         //show error messages
//         ui.invalidateForm()

//         //if form is empty, button to be enabled
//         submitBtn.disabled = false
//     } else {
//         set(ref(db, propertyName.value),{
//             // name_of_property: propertyName.value,
//             // location_of_property: propertyLocation.value,
//             // range_of_property: propertyRange.value,
//             // features_of_property: propertyFeatures.value,
//             // description_of_property: propertyDescription.value,
//             images: {
//                 image_one: newImage_One.value,
//                 // image_two: newImage_Two.src,
//                 // image_three: newImage_Three.src,
//                 // image_four: newImage_Four.src
//             }
//             // video: newVideo.src
//         }).then(() => {
//             alert("DATA SAVED SUCCESSFULLY!")
//             window.location.href = './confirm.html'
//         }).catch(error => {
//             alert('UNSUCCESSFUL:' + error)
//         })
//         //if form is fiiled, button to be disabled
//         submitBtn.disabled = true
//     }
// })


// class UI{
//     invalidateForm(){
//         ui.setError()
//     }
//     setError(){
//         const propertyHome = document.querySelector('form .all-property')

//         const errorMsg = document.createElement('div')
//         errorMsg.classList.add('setError')
//         errorMsg.innerHTML = '<p class="error">fill all inputs</p>' 
//         form.insertBefore(errorMsg, propertyHome)
//         //remove div after 3 secs
//         setTimeout(() => {
//             errorMsg.remove()
//         },3000)
//     }
// }
// const ui = new UI()