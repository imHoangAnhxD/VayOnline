$(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);
    var tygiaId = urlParams.get('id');
    if (tygiaId) {
        // Nếu có tham số 'id' trong URL, thực hiện lấy thông tin từ API
        $.ajax({
            url: "http://localhost:8080/tygia/" + tygiaId,
            method: "GET",
            dataType: "json",
            success: function(response) {
                $("#edit-tygia-id").val(response.id);
                $("#edit-tygia-name").val(response.name);
                $("#edit-tygia-mua").val(response.mua);
                $("#edit-tygia-ban").val(response.ban);
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        });
    }

    $("#save-edited-tygia").click(function() {
        // Lấy thông tin đã chỉnh sửa
        var name = $("#edit-tygia-name").val();
        var mua = $("#edit-tygia-mua").val();
        var ban = $("#edit-tygia-ban").val();

        // Gửi thông tin đã chỉnh sửa lên server (sử dụng AJAX)
        $.ajax({
            url: "http://localhost:8080/tygia/update/" + tygiaId,
            method: "PUT",
            contentType: "application/json",
            data: JSON.stringify({ name: name, mua: mua, ban: ban }),
            success: function(response) {
                alert(response);
                window.location.href = "admin.html"; // Chuyển về trang danh sách tỷ giá
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        });
    });
});