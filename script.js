// document.getElementById("view").innerHTML = salary + " . " + otherSources;
var balance = document.getElementById("balance");
var total, totals;

function details() {
    var salary = document.getElementById("salary").value;
    var otherSources = document.getElementById("otherSources").value;
    console.log(salary);
    total = Number(salary) + Number(otherSources);
    document.getElementById("view").innerHTML = total;
    balances = Number(total) - Number(totals);
    balance.innerHTML = balances;
}

function expenses() {
    var food = document.getElementById("food").value;
    var rent = document.getElementById("rent").value;
    var shopping = document.getElementById("shopping").value;
    var medicine = document.getElementById("medicine").value;
    var other = document.getElementById("other").value;
    totals = Number(rent) + Number(food) + Number(shopping) + Number(medicine) + Number(other);
    document.getElementById("views").innerHTML = totals;
    balances = Number(total) - Number(totals);
    balance.innerHTML = balances;
}
// balances = totals - totals;
// var incomeButton = document.getElementById("incomeButton");
// incomeButton.addEventListener("click", details);
//details.addEentListender("click", submit);
//addModify.addEventListener("click", add);