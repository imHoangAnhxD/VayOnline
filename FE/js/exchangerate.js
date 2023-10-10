$(document).ready(function() {
    // Lấy danh sách  từ API
    function getTygia() {
        $.ajax({
            url: "http://localhost:8080/tygia",
            method: "GET",
            dataType: "json",
            success: function(response) {
                var tygia = response;
                var tygiaList = $("#tygia-list");
                
                tygiaList.empty();
                
                tygia.forEach(function( tygia) {
                    var row = $("<tr>");
                   
                    row.append($("<td>").text(tygia.name));
                    row.append($("<td>").text(tygia.mua));
                    row.append($("<td>").text(tygia.ban));
                  
                    
                    
                  
                    
                   tygiaList.append(row);
                });
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        });
    }
    
    // Xóa  từ API
   
    
    // Lấy danh sách khách hàng khi trang được tải
    getTygia();
  });