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