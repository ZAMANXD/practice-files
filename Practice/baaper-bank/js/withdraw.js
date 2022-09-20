// step-1: add Event Listener in withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2: get the withdraw amount from withdraw input field 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-7: clear the input field 
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('please provide a valid number');
        return;
    }

    // step-3: get previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-5: get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Baper bank e eto taka nai');
        return;
    }

    // step-4: calculate total withdraw amount 
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6: calculate the current balance after withdrawal
    const newBalanceTotal = previousBalanceTotal - currentWithdrawTotal;
    balanceTotalElement.innerText = newBalanceTotal;



})
