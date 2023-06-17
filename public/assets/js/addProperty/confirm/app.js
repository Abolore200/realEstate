const property = localStorage.getItem('property')
let propertyJSON = JSON.parse(property)


const display = document.querySelector('.display-property')
let arr = propertyJSON.pop()
console.log(arr);
let html = document.createElement('div')
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
    
`
display.appendChild(html)
console.log(html);