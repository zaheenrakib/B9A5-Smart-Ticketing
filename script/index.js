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
        
        const fixedPrice = document.getElementById('ticket-price').innerText;

        const selectContainer = document.getElementById('append-seat');

        const creteDiv = document.createElement('div');
        creteDiv.classList.add('flex','justify-between');


        const titleSeatName = document.createElement("h2");
        titleSeatName.innerText = curentValue;
        titleSeatName.classList.add('card-title')
        selectContainer.appendChild(titleSeatName);

        const seatClassName = document.createElement('h2');
        seatClassName.innerText = "Economoy";
        seatClassName.classList.add('card-title');
        selectContainer.appendChild(seatClassName);

        const seatCurentPrice = document.createElement('h2');
        seatCurentPrice.innerText = fixedPrice;
        seatCurentPrice.classList.add('card-title');
        selectContainer.appendChild(seatCurentPrice);

        creteDiv.appendChild(titleSeatName);
        creteDiv.appendChild(seatClassName);
        creteDiv.appendChild(seatCurentPrice);
        selectContainer.appendChild(creteDiv);
        
        seat.classList.add('btn-disableded');
        seat.classList.add('text-white');

        totalSeat = totalSeat - 1;
        setInnerText('total-seat',totalSeat);

        count = count + 1;
        setInnerText('seat-count', count);


        const totalCost = document.getElementById('total-prices').innerText;
        const convertTotal = parseInt(totalCost) + parseInt(fixedPrice);

        const gradTotal = document.getElementById('grad-total').innerText;
        const convertGradTotal = parseInt(gradTotal) + parseInt(fixedPrice);



        setInnerText('total-prices' , convertTotal);
        setInnerText('grad-total', convertGradTotal); 

        if(count >= 4){
            Swal.fire("You Select Max Number");
            count = count - 1;   
            totalSeat = totalSeat + 1;
        }
    })
}



