function calculate() {
    var moneytb=document.getElementById("money-tb");
    moneytb.style.display='block';
    var loanAmount = parseFloat(document.getElementById('loanAmount').value);
    var loanTerm = parseInt(document.getElementById('loanTerm').value);

    var monthlyInterest = 0.03; // Lãi suất hàng tháng (3%)
    var monthlyPayment = loanAmount / loanTerm;

    var resultTable = document.getElementById('resultTable');
    resultTable.innerHTML = '';
    
    for (var i = 1; i <= loanTerm; i++) {
        var interest = loanAmount * monthlyInterest;
        var principal = monthlyPayment - interest;
        loanAmount -= principal;

        var row = document.createElement('tr');
        row.innerHTML = '<td>' + i + '</td>' +
                        '<td>' + principal.toFixed(2) + '</td>' +
                        '<td>' + interest.toFixed(2) + '</td>' +
                        '<td>' + monthlyPayment.toFixed(2) + '</td>';
        resultTable.appendChild(row);
    }
}