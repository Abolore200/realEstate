const firebaseConfig = {
  apiKey: "AIzaSyDgwhfPV31tPcmmKwdLcoB25TTsxL3R01I",
  authDomain: "realestate-4ef65.firebaseapp.com",
  projectId: "realestate-4ef65",
  storageBucket: "realestate-4ef65.appspot.com",
  messagingSenderId: "369476045299",
  appId: "1:369476045299:web:00deefe54f1775f2a4ea86",
  measurementId: "G-ML6VZ4W85V"
};
firebase.initializeApp(firebaseConfig);

const newImage_One = document.querySelector('#imageOne')
const newImage_Two = document.querySelector('#imageTwo')
const newImage_Three = document.querySelector('#imageThree')
const newImage_Four = document.querySelector('#imageFour')

const allImages = [newImage_One,newImage_Two,newImage_Three,newImage_Four]

const parentImageOne = newImage_One.parentElement
const parentImageTwo = newImage_Two.parentElement
const parentImageThree = newImage_Three.parentElement
const parentImageFour = newImage_Four.parentElement

const propertyImageUrl = []


// parentImageOne.style.backgroundImage = `url(${propertyImageUrl[0]})`

allImages.forEach(img => {
  img.addEventListener('change', e => {
    var fileItemOne;
    var fileNameOne;
    fileItemOne = e.target.files[0]
    fileNameOne = fileItemOne.name
    //
    let storageRef = firebase.storage().ref("images/" + fileNameOne)
    //
    let uploadTask = storageRef.put(fileItemOne)
    uploadTask.on("state_changed", snapshot => {
      // console.log(snapshot);
    }, (error) => {
      alert('error: ' + error)
    },() => {
      uploadTask.snapshot.ref.getDownloadURL().then((url) => {
        alert('upload successful!')
        ui.storePropertyImage(url)
        //
        
      })
    })
  })
})
//
const propertyName = document.querySelector('#propertyName')
const propertyLocation = document.querySelector('#propertyLocation')
const propertyRange = document.querySelector('#propertyRange')
const propertyFeatures = document.querySelector('#propertyFeatures')
const propertyDescription = document.querySelector('#propertyDescription')
const allProperty = [propertyDescription,propertyFeatures,propertyLocation,propertyName,propertyRange]
allProperty.forEach(fill => {
    fill.autocomplete = 'off'
})

const form = document.querySelector('form')
form.addEventListener('submit', e => {
  e.preventDefault()

  if(
      propertyName.value.trim() == '' ||
      propertyLocation.value.trim() == '' ||
      propertyRange.value.trim() == '' ||
      propertyFeatures.value.trim() == '' ||
      // propertyDescription.value.trim() == '' ||
      newImage_One.value === '' ||
      newImage_Two.value === '' ||
      newImage_Three.value === '' ||
      newImage_Four.value === '' 
      // newVideo.src === ''
    ){
      e.target.disabled = false

      //show error messages
      ui.invalidateForm()
    } else {
      // ui.createArr()

      ui.createProperty()
      window.location.href = './confirm.html'
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
  async storePropertyImage(url){
    await propertyImageUrl.push(url)
    if(propertyImageUrl !== null || propertyImageUrl !== []){
      parentImageOne.style.backgroundImage = `url(${propertyImageUrl[0]})`
      parentImageTwo.style.backgroundImage = `url(${propertyImageUrl[1]})`
      parentImageThree.style.backgroundImage = `url(${propertyImageUrl[2]})`
      parentImageFour.style.backgroundImage = `url(${propertyImageUrl[3]})`
    }
  }
  createProperty(){
    const property = {
      name_of_property: propertyName.value,
      location_of_property: propertyLocation.value,
      range_of_property: propertyRange.value,
      features_of_property: propertyFeatures.value,
      description_of_property: propertyDescription.value,
      images: propertyImageUrl
    }
    this.save(property)
  }
  save(property){
    let app = this.getls()
    app.push(property)
    localStorage.setItem('properties', JSON.stringify(app))
  }
  getls(){
    let app;
    let appls = localStorage.getItem('properties')
    if(appls === null){
      app = []
    } else {
      app = JSON.parse(appls)
    } return app
  }
}
const ui = new UI()