function calculate() {
    var moneytb = document.getElementById("money-tb");
    moneytb.style.display = 'block';

    var loanAmount = parseFloat(document.getElementById('loanAmount').value);
    var loanTerm = parseInt(document.getElementById('loanTerm').value);
    var monthlyInterest = 0.03; // Lãi suất hàng tháng (3%)
    var monthlyPayment = loanAmount * (monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -loanTerm))); // Công thức tính trả nợ hàng tháng

    var resultTable = document.getElementById('resultTable');
    resultTable.innerHTML = '';

    var totalPayment = 0;

    for (var i = 1; i <= loanTerm; i++) {
        var interest = loanAmount * monthlyInterest; // Tính lãi cho tháng hiện tại bằng cách nhân số tiền còn lại với tỷ lệ lãi hàng tháng.
        var principal = monthlyPayment - interest; // Tính gốc cho tháng hiện tại bằng cách trừ lãi từ khoản trả hàng tháng.
        loanAmount -= principal; // Giảm số tiền còn lại của khoản vay đi số tiền gốc đã trả trong tháng hiện tại.

        var row = document.createElement('tr');
        row.innerHTML = '<td>' + i + '</td>' +
                        '<td>' + principal.toFixed(2) + '</td>' +
                        '<td>' + interest.toFixed(2) + '</td>' +
                        '<td>' + monthlyPayment.toFixed(2) + '</td>';
        resultTable.appendChild(row);

        totalPayment += monthlyPayment;
    }

    // hàng ghi tổng tiền phải trả 
    var totalRow = document.createElement('tr');
    totalRow.innerHTML = '<td colspan="3"><strong>Tổng cộng</strong></td>' +
                         '<td><strong>' + totalPayment.toFixed(2) + '</strong></td>';
    resultTable.appendChild(totalRow);
}
