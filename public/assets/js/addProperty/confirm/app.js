import { val } from "../add/app.js";
import {db, ref, onValue, set, remove } from "../add/firebase.js"

// import { propertyName } from "../add/app.js";

// console.log(propertyName);


window.addEventListener('DOMContentLoaded', () => {
    const dbref = ref(db)

    console.log(dbref);
    onValue(dbref, (snapshot) => {
        if(snapshot.exists()){
            const data = snapshot.val()

            console.log(data);
        }
        // const data = snapshot.val()

        // updateStarCount(postElement, data);
    }).catch((err) => {
        
    });
})



// const uploadBtn = document.querySelector('.fixed-bottom-bar button')
// uploadBtn.addEventListener('click', () =>{
//     window.location.href = './checkout.html'
// })