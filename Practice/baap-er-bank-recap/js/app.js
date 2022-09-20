/*
1. add event listener to the diposit button
2. get diposit amount from the diposit field
2.5 convert string diposit amount to a number type
3. clear the diposit input field after getting the value
4. get the previous diposit total
5. calculate new total diposit and set the value to the diposit total
6. get the balance total.
7. calculate the new balance total element and set it to the current balance
*/

// step-1:
document.getElementById('btn-diposit').addEventListener('click', function () {
    // step-2:
    const dipositField = document.getElementById('diposit-field');
    const newDipositAmountString = dipositField.value;

    // step-2.5:
    const newDipositAmount = parseFloat(newDipositAmountString);

    // step-3:
    dipositField.value = '';

    // step-4:
    const dipositTotalElement = document.getElementById('diposit-total');
    const previousDipositTotalString = dipositTotalElement.innerText;
    const previousDipositTotal = parseFloat(previousDipositTotalString);

    // step-5: 
    const newDipositTotal = previousDipositTotal + newDipositAmount;
    dipositTotalElement.innerText = newDipositTotal;

    //step-6:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

    //step-7:
    const newBalanceTotal = previousBalanceTotalAmount + newDipositAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})