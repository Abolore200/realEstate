// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
// import { getStorage, ref, uploadBytes,uploadBytesResumable, getDownloadURL   } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-storage.js"

// const firebaseConfig = {
//     apiKey: "AIzaSyDgwhfPV31tPcmmKwdLcoB25TTsxL3R01I",
//     authDomain: "realestate-4ef65.firebaseapp.com",
//     projectId: "realestate-4ef65",
//     storageBucket: "realestate-4ef65.appspot.com",
//     messagingSenderId: "369476045299",
//     appId: "1:369476045299:web:00deefe54f1775f2a4ea86",
//     measurementId: "G-ML6VZ4W85V"
// };
    
// const app = initializeApp(firebaseConfig);
// const storage = getStorage()

// const newImage_One = document.querySelector('#imageOne')
// var fileItemOne;
// var fileNameOne;
// newImage_One.addEventListener('change', e => {
//   fileItemOne = e.target.files[0];
//   fileNameOne = fileItemOne.name;
// })

// // const newImage_Two = document.querySelector('#imageTwo')
// // var fileItemTwo;
// // var fileNameTwo;
// // newImage_Two.addEventListener('change', e => {
// //   fileItemTwo = e.target.files[0];
// //   fileNameTwo = fileItemTwo.name;
// // })
// const form = document.querySelector('form')
// form.addEventListener('submit', e => {
//     e.preventDefault()

//     const imgName = ref(storage, fileNameOne)

//     const imagesRef = ref(storage, `images/${fileNameOne}`)

//     imgName.name === imagesRef.name
//     imgName.fullPath === imagesRef.fullPath

//     // const metadata = {
//     //     contentType: 'image/jpeg'
//     // }

//     const uploadTask = uploadBytesResumable(imagesRef, fileNameOne)

//     uploadTask.on('state_changed', (snapshot) => {
//         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         console.log('Upload is ' + progress + '% done')
//     },(error) => {
//         console.log("error: " + error);
//     },() => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//             console.log('File available at', downloadURL);
//         });
//     })

// })