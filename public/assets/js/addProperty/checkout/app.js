const successMsg = document.querySelector('main .main')

const api = fetch('../assets/js/addProperty/checkout/success.json')
.then(res => res.json())
.then(res => {
    let html = ""
    html += `
    <div class="main">
        <div class="success-home">
            <div class="success-outer">
                <div class="success-inner">
                    <i class="fa-solid fa-check"></i>
                </div>
            </div>
        </div>
        <div class="successMsg">
            <p class="color:#263238"> ${res?.success} </p>
        </div>
    </div>
`
successMsg.innerHTML = html
}).catch(err => {
    let html = ""
    html += `
    <div class="main">
        <div class="success-home">
            <div class="success-outer">
                <div class="success-inner">
                    <i class="fa-solid fa-check"></i>
                </div>
            </div>
        </div>
        <div class="successMsg">
            <p class="color:#263238"> ${err?.failed} </p>
        </div>
    </div>
`
successMsg.innerHTML = html
})

const homeBtn = document.querySelector('.fixed-bottom-bar button')
homeBtn.addEventListener('click', () => {
    window.location.href = '../home.html'
})


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBpnCm8_c7Tbyzs-mSbf7nmrZldRly1NlM",
//   authDomain: "real-estate-1c848.firebaseapp.com",
//   projectId: "real-estate-1c848",
//   storageBucket: "real-estate-1c848.appspot.com",
//   messagingSenderId: "132489987972",
//   appId: "1:132489987972:web:285f79aeca9fe639bb7fd1",
//   measurementId: "G-VJ9H32YGT6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);