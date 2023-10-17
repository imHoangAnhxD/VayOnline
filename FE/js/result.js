function getClient() {
    var id = document.getElementById("CMND").value;
   
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var client = JSON.parse(xhr.responseText);
                updateClientInfo(client);
            } 
        }
    };
    
    xhr.open("GET", "http://localhost:8080/clientcmnd/" + id, true);
    xhr.send();
}

function updateClientInfo(client) {
    
   
   
    
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
    document.getElementById("thoigian").textContent = client.thoigian;
    document.getElementById("chinhanh").textContent = client.chinhanh;
    document.getElementById("kenhvay").textContent = client.kenhvay;
    document.getElementById("status").textContent = client.status;
  

   if(document.getElementById("hoten").textContent==document.getElementById("cmnd").textContent){
    document.getElementById("list-info").style.display='none';
    document.getElementById("error-message").style.display='block';
   }
   else{
    document.getElementById("list-info").style.display = "block";
   }
}
