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
        var interest = loanAmount * monthlyInterest; //tính lãi cho tháng hiện tại bằng cách nhân số tiền còn lại với tỷ lệ lãi hàng tháng.
        var principal = monthlyPayment - interest; //tính gốc cho tháng hiện tại bằng cách trừ lãi từ khoản trả hàng tháng.
        loanAmount -= principal; //Dòng này giảm số tiền còn lại của khoản vay đi số tiền gốc đã trả trong tháng hiện tại.

        var row = document.createElement('tr');
        row.innerHTML = '<td>' + i + '</td>' +
                        '<td>' + principal.toFixed(2) + '</td>' +
                        '<td>' + interest.toFixed(2) + '</td>' +
                        '<td>' + monthlyPayment.toFixed(2) + '</td>';
        resultTable.appendChild(row);
    }
}