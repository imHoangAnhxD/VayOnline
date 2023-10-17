package com.example.Chovay;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Base64;
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
import org.springframework.web.bind.annotation.PutMapping;
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
	            Client client = new Client(0, null, null, null, null, null, null, null, null, 0,0, null, null,null);
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
	            client.setThoigian(result.getInt("thoigian"));
	            client.setChinhanh(result.getString("chinhanh"));
	            client.setKenhvay(result.getString("kenhvay"));
	            client.setStatus(result.getString("status"));
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

@GetMapping("/clientcmnd/{cmnd}")
public Client getClient(@PathVariable String cmnd) {
	
	Connection connection = null;
	PreparedStatement ps = null;
	ResultSet result = null;
	Client client = new Client(0, cmnd,cmnd, cmnd, cmnd, cmnd, cmnd, cmnd, cmnd, 0,0, cmnd, cmnd,cmnd);
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
			client.setThoigian(result.getInt("thoigian"));
			client.setChinhanh(result.getString("chinhanh"));
			client.setKenhvay(result.getString("kenhvay"));
			client.setStatus(result.getString("status"));
		}
	} // End of try block
	catch (Exception e) {
		e.printStackTrace();
	}
	
	return client;
}

@GetMapping("/client/{id}")
public Client getClientbyID(@PathVariable int id) {
	
	Connection connection = null;
	PreparedStatement ps = null;
	ResultSet result = null;
	Client clientid = new Client(id, null, null, null, null, null, null, null, null, id, id, null, null, null);
	try {
		Class.forName("com.mysql.cj.jdbc.Driver");
		connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/chovayonl", "root", "Endgame3112");
		ps = connection.prepareStatement("select * from clientvo where id = ?");
		 ps.setInt(1, clientid.getId());
		result = ps.executeQuery();
		while (result.next()) {
			clientid.setId(result.getInt("id"));
			clientid.setHoten(result.getString("hoten"));
			clientid.setCmnd(result.getString("cmnd"));
			clientid.setDiachi(result.getString("diachi"));
			clientid.setTel(result.getString("tel"));
			clientid.setEmail(result.getString("email"));
			clientid.setNghenghiep(result.getString("nghenghiep"));
			clientid.setThunhap(result.getString("thunhap"));
			clientid.setSanphamchovay(result.getString("sanphamchovay"));
			clientid.setTienvay(result.getInt("tienvay"));
			clientid.setThoigian(result.getInt("thoigian"));
			clientid.setChinhanh(result.getString("chinhanh"));
			clientid.setKenhvay(result.getString("kenhvay"));
			clientid.setStatus(result.getString("status"));
		}
	} // End of try block
	catch (Exception e) {
		e.printStackTrace();
	}
	
	return clientid;
}
@PutMapping("/client/update/{id}")
public Client updateClientByID(@PathVariable int id, @RequestBody Client updatedClient) {

    Connection connection = null;
    PreparedStatement ps = null;

    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/chovayonl", "root", "Endgame3112");
        ps = connection.prepareStatement("UPDATE clientvo SET hoten=?, cmnd=?, diachi=?, tel=?, email=?, nghenghiep=?, thunhap=?, sanphamchovay=?, tienvay=?, thoigian=?, chinhanh=?, kenhvay=?, status=? WHERE id=?");

        ps.setString(1, updatedClient.getHoten());
        ps.setString(2, updatedClient.getCmnd());
        ps.setString(3, updatedClient.getDiachi());
        ps.setString(4, updatedClient.getTel());
        ps.setString(5, updatedClient.getEmail());
        ps.setString(6, updatedClient.getNghenghiep());
        ps.setString(7, updatedClient.getThunhap());
        ps.setString(8, updatedClient.getSanphamchovay());
        ps.setInt(9, updatedClient.getTienvay());
        ps.setInt(10, updatedClient.getThoigian());
        ps.setString(11, updatedClient.getChinhanh());
        ps.setString(12, updatedClient.getKenhvay());
        ps.setString(13, updatedClient.getStatus());
        ps.setInt(14, id);

        int rowsAffected = ps.executeUpdate();

        if (rowsAffected > 0) {
            updatedClient.setId(id);
            return updatedClient;
        }

    } catch (Exception e) {
        e.printStackTrace();
    } finally {
        // Close connection and resources
        // Add code here to close connection, ps, and result set
    }

    return null; // Return null if update fails
}

@PostMapping("/client/save")
public String addClient(@RequestBody Client client) {
    Connection connection = null;
    PreparedStatement ps = null;
    int result = 0;
    
    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/chovayonl", "root", "Endgame3112");

        // Use a PreparedStatement to insert the client data
        ps = connection.prepareStatement("INSERT INTO clientvo (hoten, cmnd, diachi, tel, email, nghenghiep, thunhap, sanphamchovay, tienvay,thoigian, chinhanh, kenhvay,status) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)");
        ps.setString(1, client.getHoten());
        ps.setString(2, client.getCmnd());
        ps.setString(3, client.getDiachi());
        ps.setString(4, client.getTel());
        ps.setString(5, client.getEmail());
        ps.setString(6, client.getNghenghiep());
        ps.setString(7, client.getThunhap());
        ps.setString(8, client.getSanphamchovay());
        ps.setInt(9, client.getTienvay());
        ps.setInt(10, client.getThoigian());
        ps.setString(11, client.getChinhanh());
        ps.setString(12, client.getKenhvay());
        ps.setString(13, client.getStatus());
        result = ps.executeUpdate();
        ps.close();
        connection.close();
        // Redirect the response to success page
        return "Add Successfully";
    } catch (Exception e) {
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
            return new ResponseEntity<>("deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Not found with ID: " + id, HttpStatus.NOT_FOUND);
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
