CREATE TABLE admin (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  tel VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  room VARCHAR(255) NOT NULL
);
INSERT INTO admin (username,password,name,role,tel,email,room) VALUES ('admin','admin',"Nguyễn Hoàng Anh","Quản trị viên","0388585652","ha@mail.com","Phòng quản lý");

