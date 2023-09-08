let kilometres = document.getElementById('kilometres')
let age = document.getElementById('age')
const btnGen = document.getElementById('btn-gen')
const price = 0.21
let ticketPrice = kilometres * price
let message;



btnGen.addEventListener('click', function(){
    kilometres = parseInt(kilometres.value);
    age = parseInt(age.value);
    ticketPrice = kilometres * price
    message = 'il costo del tuo biglietto è di: ' + ticketPrice + '€'
    document.getElementById('output').innerHTML = message

    if(age < 18){
        const discountYoung = ticketPrice * 20 / 100;
        ticketPrice -= discountYoung;
        message = 'il costo del tuo biglietto scontato Young è di: ' + ticketPrice + '€'
    }else if(age > 65){
        const discountSilver = ticketPrice * 40 / 100;
        ticketPrice -= discountSilver
        message = 'il costo del tuo biglietto scontato Silver è di: ' + ticketPrice + '€'
    }

    document.getElementById('output').innerHTML = message

})
