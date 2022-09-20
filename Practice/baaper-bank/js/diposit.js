// step-1: get the diposit button and add event listener 
document.getElementById('btn-diposit').addEventListener('click', function () {
    //step-2:get the diposit amount from the diposit input field
    const dipositField = document.getElementById('diposit-field');
    const newDipositAmountString = dipositField.value;
    const newDipositAmount = parseFloat(newDipositAmountString);

    //step-7: clear the diposit field after clicking the submit button
    dipositField.value = '';

    if (isNaN(newDipositAmount)) {
        alert('please provide a valid number');
        return;
    }

    //step-3:get the current diposit total
    const dipositTotalElement = document.getElementById('diposit-total');
    const previousDipositTotalString = dipositTotalElement.innerText;
    const previousDipositTotal = parseFloat(previousDipositTotalString);

    //step-4: add numbers to set the total diposit
    const currentDipositTotal = previousDipositTotal + newDipositAmount;
    dipositTotalElement.innerText = currentDipositTotal;

    //step-5: get ballance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current balance total
    const currentBalanceTotal = previousBalanceTotal + newDipositAmount;

    //set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;



})


// 11min22sec