package com.example.Chovay;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
public class AdminController {
    private final String url = "jdbc:mysql://localhost:3306/chovayonl";
    private final String username = "root";
    private final String password = "Endgame3112";

    @PostMapping("/login")
    public String checkLogin(@RequestBody Admin admin) {
        try (Connection connection = DriverManager.getConnection(url, username, password)) {
            String sql = "SELECT * FROM admin WHERE username = ? AND password = ?";
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setString(1, admin.getUsername());
            statement.setString(2, admin.getPassword());

            ResultSet resultSet = statement.executeQuery();

            if (resultSet.next()) {
                return "Đăng nhập thành công";
            } else {
                return "Đăng nhập không thành công";
            }
        } catch (SQLException e) {
            e.printStackTrace();
            return "Lỗi khi kết nối cơ sở dữ liệu";
        }
    }
    @GetMapping("/admin/{username}")
    public Admin getAdmin(@PathVariable String username) {
    	
    	Connection connection = null;
    	PreparedStatement ps = null;
    	ResultSet result = null;
    	Admin admin = new Admin(0, username,username, username, username, username, username, username);
    	try {
    		Class.forName("com.mysql.cj.jdbc.Driver");
    		connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/chovayonl", "root", "Endgame3112");
    		ps = connection.prepareStatement("select * from admin where username = ?");
    		 ps.setString(1, admin.getUsername());
    		result = ps.executeQuery();
    		while (result.next()) {
    			admin.setId(result.getInt("id"));
    			admin.setName(result.getString("name"));
    			admin.setRole(result.getString("role"));
    			admin.setTel(result.getString("tel"));
    			admin.setEmail(result.getString("email"));
    			admin.setRoom(result.getString("room"));
    			
    		}
    	} // End of try block
    	catch (Exception e) {
    		e.printStackTrace();
    	}
    	
    	return admin;
    }

    
}
