$(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);
    var clientId = urlParams.get('id');
    if (clientId) {
        // Nếu có tham số 'id' trong URL, thực hiện lấy thông tin từ API
        $.ajax({
            url: "http://localhost:8080/client/" + clientId,
            method: "GET",
            dataType: "json",
            success: function(response) {
                $("#edit-client-id").val(response.id);
                $("#edit-client-hoten").val(response.hoten);
                $("#edit-client-cmnd").val(response.cmnd);
                $("#edit-client-diachi").val(response.diachi);
                $("#edit-client-tel").val(response.tel);
                $("#edit-client-email").val(response.email);
                $("#edit-client-nghenghiep").val(response.nghenghiep);
                $("#edit-client-thunhap").val(response.thunhap);
                $("#edit-client-sanphamchovay").val(response.sanphamchovay);
                $("#edit-client-tienvay").val(response.tienvay);
                $("#edit-client-thoigian").val(response.thoigian);
                $("#edit-client-chinhanh").val(response.chinhanh);
                $("#edit-client-kenhvay").val(response.kenhvay);
                $("#edit-client-status").val(response.status);
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        });
    }

    $("#save-edited-client").click(function() {
        
              var hoten=  $("#edit-client-hoten").val();
               var cmnd= $("#edit-client-cmnd").val();
              var diachi=  $("#edit-client-diachi").val();
               var tel= $("#edit-client-tel").val();
              var email=  $("#edit-client-email").val();
               var nghenghiep= $("#edit-client-nghenghiep").val();
                var thunhap=$("#edit-client-thunhap").val();
               var sanphamchovay= $("#edit-client-sanphamchovay").val();
               var tienvay=  $("#edit-client-tienvay").val();
                var thoigian= $("#edit-client-thoigian").val();
               var chinhanh= $("#edit-client-chinhanh").val();
                var kenhvay= $("#edit-client-kenhvay").val();
               var status= $("#edit-client-status").val();

        // Gửi thông tin đã chỉnh sửa lên server (sử dụng AJAX)
        $.ajax({
            url: "http://localhost:8080/client/update/" + clientId,
            method: "PUT",
            contentType: "application/json",
            data: JSON.stringify({ hoten: hoten, cmnd:cmnd,diachi:diachi,tel:tel,email:email,nghenghiep:nghenghiep,thunhap:thunhap,sanphamchovay:sanphamchovay,tienvay:tienvay,thoigian:thoigian,chinhanh:chinhanh,kenhvay:kenhvay,status:status }),
            success: function() {
                alert("Cập nhật thành công");
                window.location.href = "admin.html"; 
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        });
    });
});