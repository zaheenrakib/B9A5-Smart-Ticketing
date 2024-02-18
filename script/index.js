// Banner Section to Select Tickets section
const buyTickects = document.getElementById('buy-tickets');

buyTickects.addEventListener('click', function () {
    location.href = "#ph-paribahan";
});


// Select Seat

const allSeat = document.getElementsByClassName("btn-lg");
let count = 0;
let totalSeat = 40;

for (const seat of allSeat){
    seat.addEventListener('click',function(){
        
        seat.classList.add('btn-disabled');
        seat.classList.add('text-white');


        totalSeat = totalSeat - 1;
        document.getElementById('total-seat').innerText = totalSeat;

        count = count + 1;
        document.getElementById('seat-count').innerText = count;
        if(count >= 4){
            Swal.fire("You Select Max Number");
        }
    })
}



