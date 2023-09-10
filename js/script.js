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
let insertOk = true

// FUNZIONE DEL BOTTONE 'GENERA'
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
    <div class="container d-flex my-5">
        <div class="row dc-row">
            <div class="col-4 d-flex flex-column justify-content-between dc-col">
                <h3>Nome Passeggero</h3>
                <span class="my-4">${name}</span>
            </div>
            <div class="col d-flex flex-column justify-content-between">
                <h4>Offerta</h4>
                <span class="my-4">${offer}</span>
            </div>
            <div class="col d-flex flex-column justify-content-between">
                <h4>Carrozza</h4>
                <span class="my-4">${carriage}</span>
            </div>
            <div class="col-2 d-flex flex-column justify-content-between">
                <h4>Codice CP</h4>
                <span class="my-4">${CPCode}</span>
            </div>
            <div class="col d-flex flex-column justify-content-between">
                <h4>Costo Biglietto</h4>
                <span class="my-4">${ticketPrice.toFixed(2)} &euro;</span>
            </div>
        </div>
    </div>
    `

// CONTROLLO DELL ETA PER INSERIRE LO SCONTO 
    if(age === '1'){
        const discountYoung = ticketPrice * 20 / 100;
        ticketPrice -= discountYoung;
        offer = 'Biglietto  Young'
        message =`
        <h2>Il tuo biglietto:</h2>
        <div class="container d-flex my-5">
            <div class="row dc-row">
                <div class="col-4 d-flex flex-column justify-content-between dc-col">
                    <h3>Nome Passeggero</h3>
                    <span class="my-4">${name}</span>
                </div>
                <div class="col d-flex flex-column justify-content-between">
                    <h4>Offerta</h4>
                    <span class="my-4">${offer}</span>
                </div>
                <div class="col d-flex flex-column justify-content-between">
                    <h4>Carrozza</h4>
                    <span class="my-4">${carriage}</span>
                </div>
                <div class="col-2 d-flex flex-column justify-content-between">
                    <h4>Codice CP</h4>
                    <span class="my-4">${CPCode}</span>
                </div>
                <div class="col d-flex flex-column justify-content-between">
                    <h4>Costo Biglietto</h4>
                    <span class="my-4">${ticketPrice.toFixed(2)} &euro;</span>
                </div>
            </div>
        </div>
        `
    }else if(age === '2'){
        const discountSilver = ticketPrice * 40 / 100;
        ticketPrice -= discountSilver
        offer = 'Biglietto Silver'
        message =`
        <h2>Il tuo biglietto:</h2>
        <div class="container d-flex my-5">
            <div class="row dc-row">
                <div class="col-4 d-flex flex-column justify-content-between dc-col">
                    <h3>Nome Passeggero</h3>
                    <span class="my-4">${name}</span>
                </div>
                <div class="col d-flex flex-column justify-content-between">
                    <h4>Offerta</h4>
                    <span class="my-4">${offer}</span>
                </div>
                <div class="col d-flex flex-column justify-content-between">
                    <h4>Carrozza</h4>
                    <span class="my-4">${carriage}</span>
                </div>
                <div class="col-2 d-flex flex-column justify-content-between">
                    <h4>Codice CP</h4>
                    <span class="my-4">${CPCode}</span>
                </div>
                <div class="col d-flex flex-column justify-content-between">
                    <h4>Costo Biglietto</h4>
                    <span class="my-4">${ticketPrice.toFixed(2)} &euro;</span>
                </div>
            </div>
        </div>
        `
    }
    
// CONTROLLO KILOMETRAGGIO VALIDO
    if(isNaN(kilometres)){
        let insertOk = false
        message = `
        <h2>Errore:</h2>
        <h3>Numero kilometri non valido, perfavore riprova inserendo il numero di kilometri che desideri percorrere.</h3>
        `
    }

    document.getElementById('output').innerHTML = message

})
// FUNZIONE DEL BOTTONE 'ANNULLA'
btnNull.addEventListener('click', function(){
    cancel.className = "d-none"
    nameInput.value = ''
    ageInput.value = ''
    kilometresInput.value = ''
})