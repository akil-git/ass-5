const seats = document.getElementsByClassName('seat')
let selectedSeat = 0 
let prices = 550 
console.log(seats);
for (const seat of seats) {
    seat.addEventListener('click',function(event){
      console.log(seat)  
        selectedSeat = selectedSeat + 1 
        if (selectedSeat > 4) {
            alert("Enough everyone have the right to the tickets")
            return;
        }
      // seat colour set
    const elementsId = event.target.id;
    console.log(elementsId);
    setBackgroundById(elementsId);

// total ticket 
    const selectSeatElement = document.getElementById('ticket-count')
    const selectedSeats = selectSeatElement.innerText
    const addSeat = parseInt(selectedSeats)
    const seatss = addSeat + 1 
    selectSeatElement.innerText = seatss

    // total calculation
const priceElement = document.getElementById('total')
const priceText = priceElement.innerText
const priceNumber = parseInt(priceText)
const x = parseInt(prices)
const pricess = priceNumber + x
priceElement.innerText = pricess

// grand total 
const grandPriceElement = document.getElementById('grand')
const grandPriceText = grandPriceElement.innerText
const grandPriceNumber = parseInt( grandPriceText)
const xx = parseInt(prices)
const pricesss = grandPriceNumber + xx
grandPriceElement.innerText = pricesss

    // left seat
    const leftSeats = document.getElementById('seat-number')
    const seatText = leftSeats.innerText
    const leftSeat = parseInt(seatText)
    const seatLeft = leftSeat -1 
    leftSeats.innerText = seatLeft

   
 

    })
}
document.getElementById('Continue').addEventListener('click',function () {
    window.location.reload()
})

function setBackgroundById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-500')
}

