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
    seat.addEventListener('click',function(e){
        
        const curentValue = seat.innerHTML;
        console.log(curentValue);

        
        seat.classList.add('btn-disabled');
        seat.classList.add('text-white');

        totalSeat = totalSeat - 1;
        setInnerText('total-seat',totalSeat);

        count = count + 1;
        setInnerText('seat-count', count);

        if(count === 4){
            Swal.fire("You Select Max Number");
            count = count - 1;   
            totalSeat = totalSeat + 1;        
        }
    })
}



