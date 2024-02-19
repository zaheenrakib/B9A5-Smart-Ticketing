// Banner Section to Select Tickets section
const buyTickects = document.getElementById('buy-tickets');

buyTickects.addEventListener('click', function () {
    location.href = "#ph-paribahan";
});

// Hide Elements


// Select Seat

const allSeat = document.getElementsByClassName("btn-lg");
let count = 0;
let totalSeat = 40;

for (const seat of allSeat) {
    seat.addEventListener('click', function (e) {

        if (count < 4) {
            const curentValue = seat.innerHTML;

            const fixedPrice = document.getElementById('ticket-price').innerText;

            const selectContainer = document.getElementById('append-seat');

            const creteDiv = document.createElement('div');
            creteDiv.classList.add('flex', 'justify-between');


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
            setInnerText('total-seat', totalSeat);

            count = count + 1;
            setInnerText('seat-count', count);


           totalCost('total-prices', fixedPrice);

            gradTotalCost('grad-total', fixedPrice);

            if (count >= 4) {
                showElementById('coupon-container');
                showElementById('disCount');
            }
        }
        else {

            Swal.fire("You Select Max Number Seat");

        }


    })
}


const cuponCode = document.getElementById('coupon-btn');

cuponCode.addEventListener('click', function () {
    const couponValue = document.getElementById("coupon-value");
    const getValue = couponValue.value;
    console.log(getValue);

    const new15 = document.getElementById('new15');
    const newfivten = new15.innerText;

    const cuple20 = document.getElementById('couple-twinty');
    const cupleTwinty = cuple20.innerText;

    //condition
    if(getValue === newfivten){
        const firstDisCount = document.getElementById('total-prices').innerText;
        const calculateDisCount = (firstDisCount * 15) / 100;
        console.log(calculateDisCount);
        // const multiply = getTotalCost - firstDisCount;
        // const getDisCountValue = document.getElementById('total-discount').innerText;
        setInnerText('total-discount',calculateDisCount);

        //Get Grand total
        const getGrandTotal = document.getElementById('grad-total').innerText;
        console.log(getGrandTotal);
        const calculateGrandTotal = getGrandTotal - calculateDisCount;
        console.log(calculateGrandTotal);
        setInnerText('grad-total', calculateGrandTotal);


    }
    else if(getValue === cupleTwinty){

    }
    else{
        Swal.fire({
            title: 'Error!',
            text: 'Invalid Coupon Code',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    }
});


//Next Button 
const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', function () {
    Swal.fire({
        title: "SUCCESS",
        text: "Thank you for Booking Our Bus Seats We are working hard to find the best service and deals for you. Shortly you will find a confirmation in your email.",
        icon: "success"
    });
})


