$(document).ready(function() {
    // Lấy danh sách khách hàng từ API
    function getClients() {
        $.ajax({
            url: "http://localhost:8080/clients",
            method: "GET",
            dataType: "json",
            success: function(response) {
                var clients = response;
                var clientList = $("#client-list");
                
                clientList.empty();
                
                clients.forEach(function(client) {
                    var row = $("<tr>");
                    row.append($("<td>").text(client.id));
                    row.append($("<td>").text(client.hoten));
                    row.append($("<td>").text(client.cmnd));
                    row.append($("<td>").text(client.diachi));
                    row.append($("<td>").text(client.tel));
                    row.append($("<td>").text(client.email));
                    row.append($("<td>").text(client.nghenghiep));
                    row.append($("<td>").text(client.thunhap));
                    row.append($("<td>").text(client.sanphamchovay));
                    row.append($("<td>").text(client.tienvay));
                    row.append($("<td>").text(client.chinhanh));
                    row.append($("<td>").text(client.kenhvay));
                    
                    var actionCell = $("<td>").addClass("btn-container");
                    var deleteBtn = $("<button>").text("Xóa").data("client-id", client.id);
                    
                    deleteBtn.click(function() {
                        var clientId = $(this).data("client-id");
                        deleteClient(clientId);
                    });
                    
                    actionCell.append(deleteBtn);
                    row.append(actionCell);
                    
                    clientList.append(row);
                });
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        });
    }
    
    // Xóa khách hàng từ API
    function deleteClient(clientId) {
        $.ajax({
            url: "http://localhost:8080/client/delete/" + clientId,
            method: "DELETE",
            success: function(response) {
                alert(response);
                getClients();
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        });
    }
    
    // Lấy danh sách khách hàng khi trang được tải
    getClients();
});

$(document).ready(function() {
    // Lấy danh sách  từ API
    function getNghenghiep() {
        $.ajax({
            url: "http://localhost:8080/nghenghiep",
            method: "GET",
            dataType: "json",
            success: function(response) {
                var nghenghiep = response;
                var nghenghiepList = $("#nghenghiep-list");
                
                nghenghiepList.empty();
                
                nghenghiep.forEach(function( nghenghiep) {
                    var row = $("<tr>");
                    row.append($("<td>").text( nghenghiep.id));
                    
                    row.append($("<td>").text( nghenghiep.value));
                    
                    var actionCell = $("<td>").addClass("btn-container");
                    var deleteBtn = $("<button>").text("Xóa").data("nghenghiep-id",  nghenghiep.id);
                    
                    deleteBtn.click(function() {
                        var nghenghiepId = $(this).data("nghenghiep-id");
                        deleteNghenghiep(nghenghiepId);
                    });
                    
                    actionCell.append(deleteBtn);
                    row.append(actionCell);
                    
                    nghenghiepList.append(row);
                });
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        });
    }
    
    // Xóa  từ API
    function deleteNghenghiep(nghenghiepId) {
        $.ajax({
            url: "http://localhost:8080/nghenghiep/delete/" + nghenghiepId,
            method: "DELETE",
            success: function(response) {
                alert(response);
                getNghenghiep();
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        });
    }

    
    
    // Lấy danh sách khách hàng khi trang được tải
    getNghenghiep();
});

$(document).ready(function() {
    // Lấy danh sách  từ API
    function getThunhap() {
        $.ajax({
            url: "http://localhost:8080/thunhap",
            method: "GET",
            dataType: "json",
            success: function(response) {
                var thunhap = response;
                var thunhapList = $("#thunhap-list");
                
                thunhapList.empty();
                
                thunhap.forEach(function( thunhap) {
                    var row = $("<tr>");
                    row.append($("<td>").text( thunhap.id));
                    
                    row.append($("<td>").text( thunhap.value));
                    
                    var actionCell = $("<td>").addClass("btn-container");
                    var deleteBtn = $("<button>").text("Xóa").data("thunhap-id",  thunhap.id);
                    
                    deleteBtn.click(function() {
                        var thunhapId = $(this).data("thunhap-id");
                        deleteThunhap(thunhapId);
                    });
                    
                    actionCell.append(deleteBtn);
                    row.append(actionCell);
                    
                    thunhapList.append(row);
                });
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        });
    }
    
    // Xóa  từ API
    function deleteThunhap(thunhapId) {
        $.ajax({
            url: "http://localhost:8080/thunhap/delete/" + thunhapId,
            method: "DELETE",
            success: function(response) {
                alert(response);
                getThunhap();
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        });
    }
    
    // Lấy danh sách khách hàng khi trang được tải
    getThunhap();
});

$(document).ready(function() {
    // Lấy danh sách  từ API
    function getSanphamvay() {
        $.ajax({
            url: "http://localhost:8080/sanphamvay",
            method: "GET",
            dataType: "json",
            success: function(response) {
                var sanphamvay = response;
                var sanphamvayList = $("#sanphamvay-list");
                
                sanphamvayList.empty();
                
                sanphamvay.forEach(function( sanphamvay) {
                    var row = $("<tr>");
                    row.append($("<td>").text( sanphamvay.id));
                    
                    row.append($("<td>").text( sanphamvay.value));
                    
                    var actionCell = $("<td>").addClass("btn-container");
                    var deleteBtn = $("<button>").text("Xóa").data("sanphamvay-id",  sanphamvay.id);
                    
                    deleteBtn.click(function() {
                        var sanphamvayId = $(this).data("sanphamvay-id");
                        deleteSanphamvay(sanphamvayId);
                    });
                    
                    actionCell.append(deleteBtn);
                    row.append(actionCell);
                    
                    sanphamvayList.append(row);
                });
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        });
    }
    
    // Xóa  từ API
    function deleteSanphamvay(sanphamvayId) {
        $.ajax({
            url: "http://localhost:8080/sanphamvay/delete/" + sanphamvayId,
            method: "DELETE",
            success: function(response) {
                alert(response);
                getSanphamvay();
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        });
    }
    
    // Lấy danh sách khách hàng khi trang được tải
    getSanphamvay();
});

$(document).ready(function() {
    // Lấy danh sách  từ API
    function getChinhanh() {
        $.ajax({
            url: "http://localhost:8080/chinhanh",
            method: "GET",
            dataType: "json",
            success: function(response) {
                var chinhanh = response;
                var chinhanhList = $("#chinhanh-list");
                
                chinhanhList.empty();
                
                chinhanh.forEach(function( chinhanh) {
                    var row = $("<tr>");
                    row.append($("<td>").text( chinhanh.id));
                    
                    row.append($("<td>").text(chinhanh.value));
                    
                    var actionCell = $("<td>").addClass("btn-container");
                    var deleteBtn = $("<button>").text("Xóa").data("chinhanh-id",  chinhanh.id);
                    
                    deleteBtn.click(function() {
                        var chinhanhId = $(this).data("chinhanh-id");
                        deleteChinhanh(chinhanhId);
                    });
                    
                    actionCell.append(deleteBtn);
                    row.append(actionCell);
                    
                    chinhanhList.append(row);
                });
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        });
    }
    
    // Xóa  từ API
    function deleteChinhanh(chinhanhId) {
        $.ajax({
            url: "http://localhost:8080/chinhanh/delete/" + chinhanhId,
            method: "DELETE",
            success: function(response) {
                alert(response);
                getChinhanh();
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        });
    }
    
    // Lấy danh sách khách hàng khi trang được tải
    getChinhanh();
});
$(document).ready(function() {
    // Lấy danh sách  từ API
    function getKenhvay() {
        $.ajax({
            url: "http://localhost:8080/kenhvay",
            method: "GET",
            dataType: "json",
            success: function(response) {
                var kenhvay = response;
                var kenhvayList = $("#kenhvay-list");
                
                kenhvayList.empty();
                
                kenhvay.forEach(function( kenhvay) {
                    var row = $("<tr>");
                    row.append($("<td>").text( kenhvay.id));
                    
                    row.append($("<td>").text(kenhvay.value));
                    
                    var actionCell = $("<td>").addClass("btn-container");
                    var deleteBtn = $("<button>").text("Xóa").data("kenhvay-id",  kenhvay.id);
                    
                    deleteBtn.click(function() {
                        var kenhvayId = $(this).data("kenhvay-id");
                        deleteKenhvay(kenhvayId);
                    });
                    
                    actionCell.append(deleteBtn);
                    row.append(actionCell);
                    
                    kenhvayList.append(row);
                });
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        });
    }
    
    // Xóa  từ API
    function deleteKenhvay(kenhvayId) {
        $.ajax({
            url: "http://localhost:8080/kenhvay/delete/" + kenhvayId,
            method: "DELETE",
            success: function(response) {
                alert(response);
                getChinhanh();
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        });
    }
    
    // Lấy danh sách khách hàng khi trang được tải
    getKenhvay();
});

document.addEventListener('DOMContentLoaded', function() {
    var addNghenghiep = document.getElementById("add-nghenghiep");
    addNghenghiep.addEventListener('click', function() {
      var nghenghiepValue = document.getElementById('nghenghiep').value;
  
      // Tạo một đối tượng JSON chứa dữ liệu nghề nghiệp
      var nghenghiepData = {
        value: nghenghiepValue
      };
  
      // Gửi yêu cầu HTTP POST đến API
      fetch('http://localhost:8080/nghenghiep/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nghenghiepData)
      })
      .then(function(response) {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('Thêm nghề nghiệp thất bại');
        }
      })
      .then(function(data) {
        console.log(data); // Log thông báo từ API (nghenghiep added successfully)
        // Làm mới trang
        location.reload(); // Tải lại trang
      })
      .catch(function(error) {
        console.error(error); // Log lỗi nếu có
      });
    });
  });
  
  

  document.addEventListener('DOMContentLoaded', function() {
    // Gắn sự kiện click cho các nút
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var btn3 = document.getElementById('btn3');
    var btn4 = document.getElementById('btn4');
    var btn5 = document.getElementById('btn5');
    var btn6 = document.getElementById('btn6');
    var clientlst = document.getElementById('clientlist');
    var nghenghieplst=document.getElementById('nghenghieplist');
    var thunhaplst=document.getElementById('thunhaplist');
    var sanphamvaylst=document.getElementById('sanphamvaylist');
    var chinhanhlst= document.getElementById('chinhanhlist');
    var kenhvaylst=document.getElementById('kenhvaylist');
    btn1.addEventListener('click', function() {
   
     clientlst.style.display = 'block';
     nghenghieplst.style.display = 'none';
     thunhaplst.style.display = 'none';
    sanphamvaylst.style.display = 'none';
     chinhanhlst.style.display = 'none';
     kenhvatlst.style.display = 'none';
    });
  
    btn2.addEventListener('click', function() {
        clientlst.style.display = 'none';
        nghenghieplst.style.display = 'block';
        thunhaplst.style.display = 'none';
       sanphamvaylst.style.display = 'none';
        chinhanhlst.style.display = 'none';
        kenhvatlst.style.display = 'none';
    });
  
    btn3.addEventListener('click', function() {
     
      clientlst.style.display = 'none';
      nghenghieplst.style.display = 'none';
      thunhaplst.style.display = 'block';
     sanphamvaylst.style.display = 'none';
      chinhanhlst.style.display = 'none';
      kenhvatlst.style.display = 'none';
    });
  
    btn4.addEventListener('click', function() {
      
      clientlst.style.display = 'none';
      nghenghieplst.style.display = 'none';
      thunhaplst.style.display = 'none';
     sanphamvaylst.style.display = 'block';
      chinhanhlst.style.display = 'none';
      kenhvatlst.style.display = 'none';
    });
  
    btn5.addEventListener('click', function() {
      
      clientlst.style.display = 'none';
      nghenghieplst.style.display = 'none';
      thunhaplst.style.display = 'none';
     sanphamvaylst.style.display = 'none';
      chinhanhlst.style.display = 'block';
      kenhvatlst.style.display = 'none';
    });
  
    btn6.addEventListener('click', function() {
        clientlst.style.display = 'none';
        nghenghieplst.style.display = 'none';
        thunhaplst.style.display = 'none';
       sanphamvaylst.style.display = 'none';
        chinhanhlst.style.display = 'none';
        kenhvaylst.style.display = 'block';
    });
  
    
  });
  