const property = localStorage.getItem('properties')
let propertyJSON = JSON.parse(property)


const display = document.querySelector('.display-property')
let arr = propertyJSON.pop()
console.log(arr);
let html = document.createElement('div')
html.innerHTML = `
    <div class="allProperty">
        <div class="propertyName property">
            <p>Name</p>
            <p>${arr?.name_of_property}</p>
        </div>
        <div class="propertyLocation property">
            <p>Loaction</p>
            <p>${arr?.location_of_property}</p>
        </div>
        <div class="propertyRange property">
            <p>Price Range</p>
            <p>${arr?.range_of_property}</p>
        </div>
        <div class="propertyFeatures property">
            <p>Price Features</p>
            <p>${arr?.features_of_property}</p>
        </div>
    </div>
    <div class="propertyImages property">
        <div class="all-images">
            <div class="selectedImg img-one">
                <div class="width-auto-img">
                    <img src="${arr?.images?.[0]}" alt="selected-img"/>
                </div>
            </div>
            <div class="selectedImg img-two">
                <div class="width-auto-img">
                    <img src="${arr?.images?.[1]}" alt="selected-img"/>
                </div>
            </div>
            <div class="selectedImg img-three">
                <div class="width-auto-img">
                    <img src="${arr?.images?.[2]}" alt="selected-img"/>
                </div>   
            </div>
            <div class="selectedImg img-four">
                <div class="width-auto-img">
                    <img src="${arr?.images?.[3]}" alt="selected-img"/>
                </div>
            </div>
        </div>
    </div>
    <div class="allProperty">
        <div class="propertyDescription property">
            <p>Description</p>
            <p>${arr?.description_of_property}</p>
        </div>
    </div>
    
`
display.appendChild(html)
console.log(html);



const uploadBtn = document.querySelector('.fixed-bottom-bar button')
uploadBtn.addEventListener('click', () =>{
    window.location.href = './checkout.html'
})