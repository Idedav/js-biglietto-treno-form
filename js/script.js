// TICKET AND USER INFO
let nameInput = document.getElementById('name')
let kilometresInput = document.getElementById('kilometres')
let ageInput = document.getElementById('age')
const cancel = document.getElementById('output')
const price = 0.21
let ticketPrice = kilometres * price
let message;
let offer = 'Biglietto Standard'
// BUTTONS
const btnGen = document.getElementById('btn-gen')
const btnNull = document.getElementById('btn-null')
// NUMBER GENERATOR
const maxCarriage = 20
const minCarriage = 1
let carriage = Math.floor(Math.random() * (maxCarriage - minCarriage + 1) + minCarriage);
const maxCP = 99999
const minCP =  10000
let CPCode = Math.floor(Math.random() * (maxCP - minCP + 1) + minCP);


btnGen.addEventListener('click', function(){
    const kilometres = kilometresInput.value;
    const age = ageInput.value
    const name = nameInput.value;
    nameInput.value = ''
    ageInput.value = ''
    kilometresInput.value = ''
    ticketPrice = kilometres * price
    message = `
    <h2>Il tuo biglietto:</h2>
    <div class="container d-flex">
        <div class="row">
            <div class="col-5">
                <h3>Nome Passeggero</h3>
                <span>${name}</span>
            </div>
            <div class="col">
                <h4>Offerta</h4>
                <span>${offer}</span>
            </div>
            <div class="col">
                <h4>Carrozza</h4>
                <span>${carriage}</span>
            </div>
            <div class="col">
                <h4>Codice CP</h4>
                <span>${CPCode}</span>
            </div>
            <div class="col">
                <h4>Costo Biglietto</h4>
                <span>${ticketPrice.toFixed(2)} &euro;</span>
            </div>
        </div>
    </div>
    `
    document.getElementById('output').innerHTML = message

    if(age < 18){
        const discountYoung = ticketPrice * 20 / 100;
        ticketPrice -= discountYoung;
        offer = 'Biglietto  Young'
        message =`
        <h2>Il tuo biglietto:</h2>
        <div class="container d-flex">
            <div class="row">
                <div class="col-5">
                    <h3>Nome Passeggero</h3>
                    <span>${name}</span>
                </div>
                <div class="col">
                    <h4>Offerta</h4>
                    <span>${offer}</span>
                </div>
                <div class="col">
                    <h4>Carrozza</h4>
                    <span>${carriage}</span>
                </div>
                <div class="col">
                    <h4>Codice CP</h4>
                    <span>${CPCode}</span>
                </div>
                <div class="col">
                    <h4>Costo Biglietto</h4>
                    <span>${ticketPrice.toFixed(2)} &euro;</span>
                </div>
            </div>
        </div>
        `
    }else if(age > 65){
        const discountSilver = ticketPrice * 40 / 100;
        ticketPrice -= discountSilver
        offer = 'Biglietto Silver'
        message =`
        <h2>Il tuo biglietto:</h2>
        <div class="container d-flex">
            <div class="row">
                <div class="col-5">
                    <h3>Nome Passeggero</h3>
                    <span>${name}</span>
                </div>
                <div class="col">
                    <h4>Offerta</h4>
                    <span>${offer}</span>
                </div>
                <div class="col">
                    <h4>Carrozza</h4>
                    <span>${carriage}</span>
                </div>
                <div class="col">
                    <h4>Codice CP</h4>
                    <span>${CPCode}</span>
                </div>
                <div class="col">
                    <h4>Costo Biglietto</h4>
                    <span>${ticketPrice.toFixed(2)} &euro;</span>
                </div>
            </div>
        </div>
        `
    }

    document.getElementById('output').innerHTML = message

})

btnNull.addEventListener('click', function(){
    cancel.className = "d-none"
    nameInput.value = ''
    ageInput.value = ''
    kilometresInput.value = ''
})