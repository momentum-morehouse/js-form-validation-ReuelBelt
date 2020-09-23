console.log('Add validation!');

function validateCardNumber(number) {
    var regex = newRegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *=2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}
function validateYear(number) {
    if (number < 1900 || number > 2022) {
    return false;
}
    else {
        return true;
    } 
}
function validateForm(){
const form = document.querySelector("#parking-form")
form.addEventListener("submit", function(event){
    event.preventDefault();
    let carYear=document.querySelector("#car-year")
    let validCarYear=validateYear(carYear.value)
    console.log(validCarYear);  
    if (validCarYear === true){
        carYear.parentElement.classList.add("input-valid")
    }
    else {
        carYear.parentElement.classList.add("input-invalid")
    }
    })
}
validateForm();