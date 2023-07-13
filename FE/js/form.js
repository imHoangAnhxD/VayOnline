
function addClient() {
    var agreeCheckbox = document.getElementById("agreeCheckbox");
    if (!agreeCheckbox.checked) {
        alert("Vui lòng đọc kỹ các điều khoản trước khi gửi đăng ký!");
        return;
    }

    var id = 1;
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
    var chinhanh = document.getElementById("chinhanh");
    var kenhvay = document.getElementById("kenhvay");
    if (hoten === "" || cmnd === "" || diachi === "" || tel === "" || email === "" || tienvay === "") {
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
        id: id++,
        hoten: hoten,
        cmnd: cmnd,
        diachi: diachichung,
        tel: tel,
        email: email,
        nghenghiep: nghenghieptxt,
        thunhap: selectedOption,
        sanphamchovay: selectedOption1,
        tienvay: tienvay,
        chinhanh: selectedOption2,
        kenhvay: selectedOption3
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

    xhr.open("POST", "http://localhost:8080/client/save/" + id, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(client));
}


function normalizeName() {
    var inputElement = document.getElementById("hoten");
    var name = inputElement.value.trim();

    // Chuyển đổi tất cả các chữ cái thành chữ thường
    name = name.toLowerCase();

    // Chuyển đổi chữ cái đầu tiên của mỗi từ thành chữ hoa
    name = name.replace(/\b\w/g, function(l) {
        return l.toUpperCase();
    });

    // Xóa các khoảng trắng thừa giữa các từ
    name = name.replace(/\s+/g, " ");

    // Cập nhật giá trị trong ô input
    inputElement.value = name;
}
// Tải dữ liệu từ tệp JSON
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Lấy danh sách tỉnh/thành phố
    var tinhThanhSelect = document.getElementById("tinhthanh");
    data.tinhThanh.forEach(tinhThanh => {
      var option = document.createElement("option");
      option.value = tinhThanh.id;
      option.textContent = tinhThanh.name;
      tinhThanhSelect.appendChild(option);
    });

    // Lấy danh sách quận/huyện khi người dùng chọn tỉnh/thành phố
    tinhThanhSelect.addEventListener("change", function() {
      var selectedTinhThanh = data.tinhThanh.find(tinhThanh => tinhThanh.id === tinhThanhSelect.value);
      var quanHuyenSelect = document.getElementById("quanhuyen");
      quanHuyenSelect.innerHTML = ""; // Xóa tất cả các tùy chọn hiện có

      selectedTinhThanh.quanHuyen.forEach(quanHuyen => {
        var option = document.createElement("option");
        option.value = quanHuyen.id;
        option.textContent = quanHuyen.name;
        quanHuyenSelect.appendChild(option);
      });
    });
  });

 const cmndInput = document.getElementById('cmnd');
const apiUrl = 'http://localhost:8080/client/check-cmnd/';

function checkCMND() {
  const cmnd = cmndInput.value;

  
  fetch(apiUrl + cmnd)
    .then(response => response.text())
    .then(data => {
      // Display the response
      alert(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
