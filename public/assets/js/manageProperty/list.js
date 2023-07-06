const property = localStorage.getItem('properties')
let propertyJSON = JSON.parse(property)

const display = document.querySelector('.display-property')


let lists_of_properties = ""
for(let i = 0; i < propertyJSON.length; i++){
    lists_of_properties += `
        <div class="property_home">
            <div class="property_image">
                <img src="${propertyJSON[i]?.images?.[0]}" alt="property_image" >
            </div>
            <div class="property_details">
                <div class="name_of_property property">
                    <p> ${(propertyJSON[i].name_of_property.length > 15 ? propertyJSON[i]?.name_of_property.substring(0, 15) + "...." : propertyJSON[i]?.name_of_property)} </p>
                </div>
                <div class="location_of_property property">
                    <p> ${propertyJSON[i]?.location_of_property} </p>
                </div>
                <div class="range_of_property property">
                    <p> ${propertyJSON[i]?.range_of_property} </p>
                </div>
            </div>
        </div>
    `
}

display.innerHTML = lists_of_properties