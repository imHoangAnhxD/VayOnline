$(document).ready(function () {
    $("#loginForm").submit(function (e) {
        e.preventDefault(); // Ngăn chặn việc gửi form một cách thông thường

        var username = $("#username").val();
        var password = $("#password").val();

        var loginData = {
            "username": username,
            "password": password
        };

        $.ajax({
            type: "POST",
            url: "http://localhost:8080/login",
            data: JSON.stringify(loginData),
            contentType: "application/json",
            success: function (response) {
                alert(response); // Hiển thị kết quả đăng nhập
                if (response === "Đăng nhập thành công") {
                    localStorage.setItem("username", username); // Lưu username vào localStorage
                    window.location.href = "admininfo.html"; // Chuyển hướng đến trang admininfo.html
                } else {
                    location.reload();
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
});

function getAdmin() {
    var username = localStorage.getItem("username"); // Lấy username từ localStorage

    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var admin = JSON.parse(xhr.responseText);
                updateAdminInfo(admin);
            } 
        }
    };
    
    xhr.open("GET", "http://localhost:8080/admin/" + username, true);
    xhr.send();
}
getAdmin();
function updateAdminInfo(admin) {
    document.getElementById("id").textContent = admin.id;
    document.getElementById("name").textContent = admin.name;
    document.getElementById("role").textContent = admin.role;
    document.getElementById("tel").textContent = admin.tel;
    document.getElementById("email").textContent = admin.email;
    document.getElementById("room").textContent = admin.room;
    
}
