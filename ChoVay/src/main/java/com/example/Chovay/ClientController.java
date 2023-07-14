package com.example.Chovay;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Chovay.Client;

@RestController
@CrossOrigin
public class ClientController {
	@GetMapping("/clients")
	public List<Client> getClients() {
	    List<Client> clients = new ArrayList<>();
	    
	    Connection connection = null;
	    PreparedStatement ps = null;
	    ResultSet result = null;
	    
	    try {
	        Class.forName("com.mysql.cj.jdbc.Driver");
	        connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/chovayonl", "root", "Endgame3112");
	        ps = connection.prepareStatement("SELECT * FROM clientvo");
	        result = ps.executeQuery();
	        
	        while (result.next()) {
	            Client client = new Client(0, null, null, null, null, null, null, null, null, 0, null, null);
	            client.setId(result.getInt("id"));
	            client.setHoten(result.getString("hoten"));
	            client.setCmnd(result.getString("cmnd"));
	            client.setDiachi(result.getString("diachi"));
	            client.setTel(result.getString("tel"));
	            client.setEmail(result.getString("email"));
	            client.setNghenghiep(result.getString("nghenghiep"));
	            client.setThunhap(result.getString("thunhap"));
	            client.setSanphamchovay(result.getString("sanphamchovay"));
	            client.setTienvay(result.getInt("tienvay"));
	            client.setChinhanh(result.getString("chinhanh"));
	            client.setKenhvay(result.getString("kenhvay"));
	            
	            clients.add(client);
	        }
	    } catch (Exception e) {
	        e.printStackTrace();
	    } finally {
	        // Đảm bảo đóng các tài nguyên
	        if (result != null) {
	            try {
	                result.close();
	            } catch (SQLException e) {
	                e.printStackTrace();
	            }
	        }
	        if (ps != null) {
	            try {
	                ps.close();
	            } catch (SQLException e) {
	                e.printStackTrace();
	            }
	        }
	        if (connection != null) {
	            try {
	                connection.close();
	            } catch (SQLException e) {
	                e.printStackTrace();
	            }
	        }
	    }
	    
	    return clients;
	}

@GetMapping("/client/{cmnd}")
public Client getClient(@PathVariable String cmnd) {
	
	Connection connection = null;
	PreparedStatement ps = null;
	ResultSet result = null;
	Client client = new Client(0, cmnd,cmnd, cmnd, cmnd, cmnd, cmnd, cmnd, cmnd, 0, cmnd, cmnd);
	try {
		Class.forName("com.mysql.cj.jdbc.Driver");
		connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/chovayonl", "root", "Endgame3112");
		ps = connection.prepareStatement("select * from clientvo where cmnd = ?");
		 ps.setString(1, client.getCmnd());
		result = ps.executeQuery();
		while (result.next()) {
			client.setId(result.getInt("id"));
			client.setHoten(result.getString("hoten"));
			client.setCmnd(result.getString("cmnd"));
			client.setDiachi(result.getString("diachi"));
			client.setTel(result.getString("tel"));
			client.setEmail(result.getString("email"));
			client.setNghenghiep(result.getString("nghenghiep"));
			client.setThunhap(result.getString("thunhap"));
			client.setSanphamchovay(result.getString("sanphamchovay"));
			client.setTienvay(result.getInt("tienvay"));
			client.setChinhanh(result.getString("chinhanh"));
			client.setKenhvay(result.getString("kenhvay"));
		}
	} // End of try block
	catch (Exception e) {
		e.printStackTrace();
	}
	
	return client;
}
@PostMapping("/client/save/{id}")
public String addClient(@RequestBody Client client, @PathVariable String id) {
    Connection connection = null;
    PreparedStatement ps = null;
    int result = 0;
    
    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/chovayonl", "root", "Endgame3112");

        
        PreparedStatement checkStatement = connection.prepareStatement("SELECT COUNT(*) FROM clientvo WHERE id = ?");
        checkStatement.setInt(1, Integer.parseInt(id));
        ResultSet checkResult = checkStatement.executeQuery();
        checkResult.next();
        int count = checkResult.getInt(1);
        checkResult.close();
        checkStatement.close();

       
        if (count > 0) {
            ps = connection.prepareStatement("UPDATE clientvo SET hoten = ?, cmnd = ?, diachi = ?, tel = ?,email=?,nghenghiep=?,thunhap=?,sanphamchovay=?,tienvay=?,chinhanh=?,kenhvay=? WHERE id = ?");
            ps.setString(1, client.getHoten());
            ps.setString(2, client.getCmnd());
            ps.setString(3, client.getDiachi());
            ps.setString(4, client.getTel());
            ps.setString(5, client.getEmail());
            ps.setString(6, client.getNghenghiep());
            ps.setString(7, client.getThunhap());
            ps.setString(8, client.getSanphamchovay());
            ps.setInt(9,client.getTienvay());
            ps.setString(10, client.getChinhanh());
            ps.setString(11, client.getKenhvay());
            ps.setInt(12, Integer.parseInt(id));
        }
        // 
        else {
            ps = connection.prepareStatement("INSERT INTO clientvo VALUES (?, ?, ?, ?, ?,?,?,?,?,?,?,?)");
            ps.setInt(1, Integer.valueOf(client.getId()));
            ps.setString(2, client.getHoten());
            ps.setString(3, client.getCmnd());
            ps.setString(4, client.getDiachi());
            ps.setString(5, client.getTel());
            ps.setString(6, client.getEmail());
            ps.setString(7, client.getNghenghiep());
            ps.setString(8, client.getThunhap());
            ps.setString(9, client.getSanphamchovay());
            ps.setInt(	10,client.getTienvay());
            ps.setString(11, client.getChinhanh());
            ps.setString(12, client.getKenhvay());
        }
        
        result = ps.executeUpdate();
        ps.close();
        connection.close();
        // Redirect the response to success page
        return "Add Successfully";
    } // End of try block
    catch (Exception e) {
        e.printStackTrace();
        return e.toString(); 
    }
    
}

@DeleteMapping("/client/delete/{id}")
public ResponseEntity<String> deleteClient(@PathVariable int id) {
    Connection connection = null;
    PreparedStatement ps = null;
    
    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/chovayonl", "root", "Endgame3112");
        
        ps = connection.prepareStatement("DELETE FROM clientvo WHERE id = ?");
        ps.setInt(1, id);
        
        int rowsAffected = ps.executeUpdate();
        
        if (rowsAffected > 0) {
            return new ResponseEntity<>("Client deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("No client found with ID: " + id, HttpStatus.NOT_FOUND);
        }
    } catch (Exception e) {
        e.printStackTrace();
        return new ResponseEntity<>(e.toString(), HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
        try {
            if (ps != null) {
                ps.close();
            }
            if (connection != null) {
                connection.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}






}
