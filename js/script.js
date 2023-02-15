function getInputValue(id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    // inputField.value = "";
    const inputFieldValueToNumber = parseFloat(inputFieldValue);
    return inputFieldValueToNumber;
}

function getTextElementValue(id){
    const element = document.getElementById(id);
    const elementTextValue = element.innerText;
    const elementTextValueToNumber = parseFloat(elementTextValue)
    return elementTextValueToNumber;
}

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
};

document.getElementById("calculate-btn").addEventListener("click", function(){
    const income = getInputValue("income");
    const food = getInputValue("food");
    const rent = getInputValue("rent");
    const cloth = getInputValue("clothes");

    if(isNaN(income) || isNaN(food)|| isNaN(rent)|| isNaN(cloth)){
        alert("please enter an amount");
        return;
    }
    
    const totalExpense = food + rent + cloth;
    setInnerText("total-expense", totalExpense);
    
    const balance = income - totalExpense;

    if(balance >= 0){
        setInnerText("balance", balance);
    }
    else{
        alert("Expenses amount is than your income");
    }
});

document.getElementById("btn-save").addEventListener("click", function(){
    const income = getInputValue("income");
    const savePercentage = getInputValue("save");
    const balance = getTextElementValue("balance");
    const savingAmount = income / 100 * savePercentage;
    const remainingBalance = balance - savingAmount;

    if(savePercentage < 0 || savePercentage > 100){
        alert("please enter the percentage between 1 to 100");
        return;
    }
    else if(savingAmount > balance){
        alert("your saving amount is more than total expense");
        setInnerText("saving-amount", 0);
        return;
    }
    else{
        setInnerText("saving-amount", savingAmount);
        setInnerText("remaining-balance", remainingBalance);
    }
});