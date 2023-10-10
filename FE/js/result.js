function getClient() {
    var id = document.getElementById("CMND").value;
    document.getElementById("list-info").style.display = "block";
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var client = JSON.parse(xhr.responseText);
                updateClientInfo(client);
            } else if (xhr.status === 404) {
                displayErrorMessage("Không tìm thấy thông tin khách hàng.");
            }
        }
    };
    
    xhr.open("GET", "http://localhost:8080/client/" + id, true);
    xhr.send();
}

function updateClientInfo(client) {
    
    document.getElementById("list-info").display = "block";
    

    document.getElementById("id").textContent = client.id;
    document.getElementById("hoten").textContent = client.hoten;
    document.getElementById("cmnd").textContent = client.cmnd;
    document.getElementById("diachi").textContent = client.diachi;
    document.getElementById("tel").textContent = client.tel;
    document.getElementById("email").textContent = client.email;
    document.getElementById("nghenghiep").textContent = client.nghenghiep;
    document.getElementById("thunhap").textContent = client.thunhap;
    document.getElementById("sanphamchovay").textContent = client.sanphamchovay;
    document.getElementById("tienvay").textContent = client.tienvay;
    document.getElementById("chinhanh").textContent = client.chinhanh;
    document.getElementById("kenhvay").textContent = client.kenhvay;
}
function displayErrorMessage(message) {
    var errorElement = document.getElementById("error-message");
    errorElement.textContent = message;
}