const seats = document.getElementsByClassName('seat')
let selectedSeat = 0 
let price = 550 
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
    })
}
document.getElementById('Continue').addEventListener('click',function () {
    window.location.reload()
})

function setBackgroundById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-500')
}
