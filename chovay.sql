CREATE TABLE ClientVO (
  id INT NOT NULL AUTO_INCREMENT,
  hoten TEXT NOT NULL,
  cmnd text,
  diachi TEXT,
  tel TEXT,
  email TEXT,
  nghenghiep TEXT,
  thunhap TEXT,
  sanphamchovay TEXT,
  tienvay int,
  chinhanh TEXT,
  kenhvay TEXT,
  PRIMARY KEY (id)
);
INSERT INTO CLientVO (hoten, cmnd, diachi, tel,email,nghenghiep,thunhap,sanphamchovay,tienvay,chinhanh,kenhvay)
VALUES
  ('Nguyen Van A', '034200012323', 'Ha Noi', "0986452322","a12@gmail.com","Bac si"," Dưới 3 triệu đồng","Sản phẩm cho vay mua nhà","50000000","Chi nhánh Hoàng Mai","Internet");