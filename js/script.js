let name = document.getElementById('name')
let kilometres = document.getElementById('kilometres')
let age = document.getElementById('age')
const btnGen = document.getElementById('btn-gen')
const price = 0.21
let ticketPrice = kilometres * price
let message;
let offer = 'Biglietto Standard'



btnGen.addEventListener('click', function(){
    kilometres = parseInt(kilometres.value);
    age = parseInt(age.value);
    name = name.value;
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
                <span>carrozza</span>
            </div>
            <div class="col">
                <h4>Codice CP</h4>
                <span>codice</span>
            </div>
            <div class="col">
                <h4>Costo Biglietto</h4>
                <span>${ticketPrice}</span>
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
                    <span>carrozza</span>
                </div>
                <div class="col">
                    <h4>Codice CP</h4>
                    <span>codice</span>
                </div>
                <div class="col">
                    <h4>Costo Biglietto</h4>
                    <span>${ticketPrice}</span>
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
                    <span>carrozza</span>
                </div>
                <div class="col">
                    <h4>Codice CP</h4>
                    <span>codice</span>
                </div>
                <div class="col">
                    <h4>Costo Biglietto</h4>
                    <span>${ticketPrice}</span>
                </div>
            </div>
        </div>
        `
    }

    document.getElementById('output').innerHTML = message

})
