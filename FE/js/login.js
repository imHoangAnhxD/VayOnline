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
                    window.location.href = "admin.html"; // Chuyển hướng đến trang admin.html
                }
                else{
                    location.reload();
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
});