
function addClient() {
    var agreeCheckbox = document.getElementById("agreeCheckbox");
    if (!agreeCheckbox.checked) {
        alert("Vui lòng đọc kỹ các điều khoản trước khi gửi đăng ký!");
        return;
    }

    
    var hoten = document.getElementById("hoten").value;
    var cmnd = document.getElementById("cmnd").value;
    var diachi = document.getElementById("diachi").value;
    var tel = document.getElementById("tel").value;
    var email = document.getElementById("email").value;
    var nghenghiep = document.getElementById("nghenghiep");
    var thunhap = document.getElementById("thunhap");
    var sanphamchovay = document.getElementById("sanphamchovay");
    var tinhthanh = document.getElementById("tinhthanh");
    var quanhuyen = document.getElementById("quanhuyen");

    var tienvay = document.getElementById("tienvay").value;
    var thoigian = document.getElementById("thoigian").value;
    var chinhanh = document.getElementById("chinhanh");
    var kenhvay = document.getElementById("kenhvay");
    var status = document.getElementById("status").value;
    if (hoten === "" || cmnd === "" || diachi === "" || tel === "" || email === "" || tienvay === ""|| thoigian === "") {
        document.getElementById("error-message").textContent = "Vui lòng điền đầy đủ thông tin.";
        return;
    }
    function validateEmail(email) {
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
      }
      
      function validatePhoneNumber(tel) {
        var phonePattern = /^\d{10}$/; // Kiểm tra chuỗi có đúng 10 chữ số không
        return phonePattern.test(tel);
      }
      function validateCMND(cmnd) {
        var phonePattern = /^\d{12}$/; // Kiểm tra chuỗi có đúng 12 chữ số không
        return phonePattern.test(cmnd);
      }
      if (!validateEmail(email) ){
        document.getElementById("error-message").textContent = "Vui lòng kiểm tra lại email.";
        return;
      }
      if ( !validatePhoneNumber(tel)){
        document.getElementById("error-message").textContent = "Vui lòng kiểm tra lại số điện thoại.";
        return;
      }
      if ( !validateCMND(cmnd)){
        document.getElementById("error-message").textContent = "Vui lòng kiểm tra lại số CMND.";
        return;
      }
    var selectedOption = thunhap.options[thunhap.selectedIndex].text;
    var selectedOption1 = sanphamchovay.options[sanphamchovay.selectedIndex].text;
    var selectedOption2 = chinhanh.options[chinhanh.selectedIndex].text;
    var selectedOption3 = kenhvay.options[kenhvay.selectedIndex].text;
    var tinhthanhtxt=tinhthanh.options[tinhthanh.selectedIndex].text;
    var quanhuyentxt=quanhuyen.options[quanhuyen.selectedIndex].text;
    var nghenghieptxt=nghenghiep.options[nghenghiep.selectedIndex].text
    var diachichung=tinhthanhtxt + ", " + quanhuyentxt + ", " + diachi;
    
    var client = {
        hoten: hoten,
        cmnd: cmnd,
        diachi: diachichung,
        tel: tel,
        email: email,
        nghenghiep: nghenghieptxt,
        thunhap: selectedOption,
        sanphamchovay: selectedOption1,
        tienvay: tienvay,
        thoigian: thoigian,
        chinhanh: selectedOption2,
        kenhvay: selectedOption3,
        status:status
    };

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                alert("Đăng ký thành công");
                location.reload();
            } else {
                alert("Có lỗi xảy ra trong quá trình đăng ký");
            }
        }
    };

    xhr.open("POST", "http://localhost:8080/client/save", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(client));
}


function normalizeName() {
    var inputElement = document.getElementById("hoten");
    var name = inputElement.value.trim();

   

   

    // Xóa các khoảng trắng thừa giữa các từ
    name = name.replace(/\s+/g, " ");

    // Cập nhật giá trị trong ô input
    inputElement.value = name;
}




// Gọi API để lấy danh sách tùy chọn từ cổng localhost:8080
fetch('http://localhost:8080/thunhap')
.then(response => response.json())
.then(data => {
    data.forEach(thunhap => {
        const option = document.createElement('option');
        option.value = thunhap.value;
        option.textContent = thunhap.value;
        document.getElementById('thunhap').appendChild(option);
    });
})
.catch(error => console.error(error));

fetch('http://localhost:8080/nghenghiep')
.then(response => response.json())
.then(data => {
    data.forEach(nghenghiep => {
        const option = document.createElement('option');
        option.value = nghenghiep.value;
        option.textContent = nghenghiep.value;
        document.getElementById('nghenghiep').appendChild(option);
    });
})
.catch(error => console.error(error));

fetch('http://localhost:8080/sanphamvay')
.then(response => response.json())
.then(data => {
    data.forEach(sanphamvay => {
        const option = document.createElement('option');
        option.value = sanphamvay.value;
        option.textContent = sanphamvay.value;
        document.getElementById('sanphamchovay').appendChild(option);
    });
})
.catch(error => console.error(error));


fetch('http://localhost:8080/chinhanh')
.then(response => response.json())
.then(data => {
    data.forEach(chinhanh => {
        const option = document.createElement('option');
        option.value = chinhanh.value;
        option.textContent = chinhanh.value;
        document.getElementById('chinhanh').appendChild(option);
    });
})
.catch(error => console.error(error));

fetch('http://localhost:8080/kenhvay')
.then(response => response.json())
.then(data => {
    data.forEach(kenhvay => {
        const option = document.createElement('option');
        option.value = kenhvay.value;
        option.textContent = kenhvay.value;
        document.getElementById('kenhvay').appendChild(option);
    });
})
.catch(error => console.error(error));




