function getTextElementValueById(elementId) {

    // calculate the phone total price 
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalSrting = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalSrting);
    return currentPhoneTotal;
}

function setTextElementValuById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal() {
    //calculate total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValuById('sub-total', currentSubTotal);

    // culculateTax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValuById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValuById('final-total', finalAmount);
}