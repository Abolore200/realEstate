const property = localStorage.getItem('property')
let propertyJSON = JSON.parse(property)


const display = document.querySelector('.display-property')
let arr = propertyJSON.pop()
let html = document.createElement('div')
html.classList.add('allProperty')
html.innerHTML = `
    <div class="propertyName property">
        <p>Name</p>
        <p>${arr?.name}</p>
    </div>
    <div class="propertyLocation property">
        <p>Loaction</p>
        <p>${arr?.location}</p>
    </div>
    <div class="propertyRange property">
        <p>Price Range</p>
        <p>${arr?.range}</p>
    </div>
    <div class="propertyFeatures property">
        <p>Features</p>
        <p>${arr?.features}</p>
    </div>
    <div class="propertyImages property">
        <div class="all-images">
            <div class="selectedImg img-one">
                <img src="${arr?.image?.image_one}" alt="selected-img"/>
            </div>
            <div class="selectedImg img-two">
                <img src="${arr?.image?.image_two}" alt="selected-img"/>
            </div>
            <div class="selectedImg img-three">
                <img src="${arr?.image?.image_three}" alt="selected-img"/>   
            </div>
            <div class="selectedImg img-four">
                <img src="${arr?.image?.image_four}" alt="selected-img"/>
            </div>

        </div>
    </div>
    <div class="propertyVideo property">
        <div class="selectedVideo img-one">
            <video controls>
                <source src="${arr?.video}" type="video/mp4">
                <source src="${arr?.video}" type="ogg/mp4">
            </video>
        </div>
    </div>
    <div class="propertyDescription property">
        <p>Description</p>
        <p>${arr?.description}</p>
    </div>

`;
display.appendChild(html)

const uploadBtn = document.querySelector('.fixed-bottom-bar button')
uploadBtn.addEventListener('click', () =>{
    window.location.href = './checkout.html'
})