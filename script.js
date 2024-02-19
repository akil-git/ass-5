const seats = document.getElementsByClassName('seat')
let selectedSeat = 0 
let price = 550 
for (const seat of seats) {
    seat.addEventListener('click',function(){
        selectedSeat = selectedSeat + 1 
        if (selectedSeat > 4) {
            alert("Enough everyone have the right to the tickets")
            return;
        }
    })
}

