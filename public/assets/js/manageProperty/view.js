const viewproperty = sessionStorage.getItem('viewProperty')
let propertyJSON = JSON.parse(viewproperty)

const display = document.querySelector('.display-property')

const newDiv = document.createElement('div')
newDiv.innerHTML = `
    <div class="home-property">
        <div class="name_of_property nameProperty">
            <p>${propertyJSON[0]?.name}</p>
        </div>
        <div class="all_images property nameProperty">
            <div class="big-image">
                <img src="${propertyJSON[0]?.images?.image_one}" alt="img-one"/>
            </div>
            <div class="small-image">
                <ul>
                    <li>
                        <div class="full-image">
                            <img src="${propertyJSON[0]?.images?.image_two}" alt="img-two">
                        </div>
                    </li>
                    <li>
                        <div class="full-image">
                            <img src="${propertyJSON[0]?.images?.image_three}" alt="img-three">
                        </div>
                    </li>
                    <li>
                        <div class="full-image">
                            <img src="${propertyJSON[0]?.images?.image_four}" alt="img-four">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="features_range nameProperty">
            <div class="location_of_property property">
                <p>${propertyJSON[0]?.location}</p>
            </div>
            <div class="range_of_property property">
                <p>${propertyJSON[0]?.range}</p>
            </div>
            <div class="features_of_property property">
                <p>${propertyJSON[0]?.features}</p>
            </div>
        </div>
    </div>
`;

display.appendChild(newDiv)

const backArrow = document.querySelector('.back-arrow a')
backArrow.addEventListener('click', () => {
    sessionStorage.removeItem('viewProperty')
})