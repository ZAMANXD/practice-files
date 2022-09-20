

document.getElementById('btn-diposit').addEventListener('click', function () {
    //get diposit input field value
    const newDipositAmount = getInputFieldValueById('diposit-field');

    // get previous Diposit Total
    const previousDipositTotal = getTextElementValueById('diposit-total');

    //calulate new diposit total
    const newDipositTotal = previousDipositTotal + newDipositAmount;

    //set diposit total value
    setTextElementValueById('diposit-total', newDipositTotal);

    //get previous balance by using the function
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDipositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);

})