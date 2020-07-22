//This function calculates the loan amount
function calcLoan() {
    var loan = document.getElementById("lamount").value;
    console.log(loan);
    var interest = (document.getElementById("intrate").value) / 100;
    var monthlyPay = [];
    var loanTotal = [];

    for (let i = 0; i < 5; i++) {
        var months = 12 * (i + 1);
        interest /= 12;
        monthlyPay[i] = (loan * (interest * Math.pow((1 + interest), months))) / (Math.pow((1 + interest), months) - 1);
        var short = monthlyPay[i].toFixed(2);
        document.getElementById((i + 1).toString()).value = short.toString();
        console.log((i+1).toString());
        console.log(monthlyPay);
    }

    for (let i = 0; i < 5; i++) {
        var months = 12 * (i + 1);
        loanTotal[i] = monthlyPay[i] * months;
        var short = loanTotal[i].toFixed(2);
        document.getElementById((i + 6).toString()).value = short.toString();
    }

}

function clearBoxes() {
    //for (let i = 1; i <= 10; i++) {
    //    document.getElementById((i).toString()).reset();
    //}
    document.getElementById("clearMe").reset();
    document.getElementById("clearNow").reset();
    document.getElementById("clearPls").reset();

}