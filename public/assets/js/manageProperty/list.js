const property = localStorage.getItem('properties')
let propertyJSON = JSON.parse(property)


const display = document.querySelector('.display-property')

let lists_of_properties = ""
for(let i = 0; i < propertyJSON.length; i++){

    const app = minName(propertyJSON[i].name_of_property)

    console.log(app);

    lists_of_properties += `
        <a href="./viewproperty.html" class="property_link">
            <div class="property_home">
                <div class="property_image">
                    <img src="${propertyJSON[i]?.images?.[0]}" alt="property_image" class="img-one">
                </div>
                <div class="property_details">
                    <div class="name_of_property property">
                        <p>${app}</p>
                    </div>
                    <div class="location_of_property property">
                        <p>${propertyJSON[i]?.location_of_property}</p>
                    </div>
                    <div class="range_of_property property">
                        <p>${propertyJSON[i]?.range_of_property}</p>
                    </div>
                </div>
            </div>
            
            <div class="property-block">
                <div class="hidden-images">
                    <img src="${propertyJSON[i]?.images?.[1]}" alt="property_image" class="img-two">
                    <img src="${propertyJSON[i]?.images?.[2]}" alt="property_image" class="img-three">
                    <img src="${propertyJSON[i]?.images?.[3]}" alt="property_image" class="img-four">
                </div>
                <div class="hidden-features_description">
                    <p class="features">${propertyJSON[i]?.features_of_property}</p>
                    <p class="description">${propertyJSON[i]?.description_of_property}</p>
                </div>
            </div>
        </a>
    `
}

function minName(name){
    if(name.length > 20){
        const reduceNameLength = `${name.substring(0,20)}...`

        return reduceNameLength
    } return name
}

display.innerHTML = lists_of_properties

const clickProperty = document.querySelectorAll('.display-property a')
clickProperty.forEach((lists) => {
    lists.addEventListener('click', (e) => {
        e.preventDefault()

        ui.getList(lists)

        window.location.href = 'viewproperty.html'
    })
})


class UI{
    getList(lists){
        const arr = {
            name: lists.querySelector('.name_of_property p').textContent,
            location: lists.querySelector('.location_of_property p').textContent,
            images : {
                image_one: lists.querySelector('.property_image .img-one').src,
                image_two: lists.querySelector('.hidden-images .img-two').src,
                image_three: lists.querySelector('.hidden-images .img-three').src,
                image_four: lists.querySelector('.hidden-images .img-four').src
            },
            range: lists.querySelector('.range_of_property p').textContent,
            features: lists.querySelector('.hidden-features_description .features').textContent,
            description: lists.querySelector('.hidden-features_description .description').textContent
        }

        this.saveListToSessionStorage(arr)
    }
    saveListToSessionStorage(arr){
        let app = this.getListToSessionStorage()
        app.push(arr)
        sessionStorage.setItem('viewProperty', JSON.stringify(app))
    }
    getListToSessionStorage(){
        let app;
        let appSS = sessionStorage.getItem('viewProperty')
        if(appSS === null){
            app = []
        } else {
            app = JSON.parse(appSS)
        } return app
    }
}
const ui = new UI()