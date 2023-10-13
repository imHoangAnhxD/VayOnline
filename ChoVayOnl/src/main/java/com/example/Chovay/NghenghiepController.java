package com.example.Chovay;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
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

import com.example.Chovay.Nghenghiep;

@RestController
@CrossOrigin
public class NghenghiepController {
    @GetMapping("/nghenghiep")
    public List<Nghenghiep> getNghenghiepList() {
        List<Nghenghiep> nghenghiepList = new ArrayList<>();

        Connection connection = null;
        PreparedStatement ps = null;
        ResultSet result = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/chovayonl", "root", "Endgame3112");
            ps = connection.prepareStatement("SELECT * FROM nghenghiep");
            result = ps.executeQuery();

            while (result.next()) {
                int id = result.getInt("id");
                String value = result.getString("value");

                Nghenghiep nghenghiep = new Nghenghiep();
                nghenghiep.setId(id);
                nghenghiep.setValue(value);
                nghenghiepList.add(nghenghiep);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
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

        return nghenghiepList;
    }

    @PostMapping("/nghenghiep/save")
    public ResponseEntity<String> addThunhap(@RequestBody Nghenghiep nghenghiep) {
        Connection connection = null;
        PreparedStatement ps = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/chovayonl", "root", "Endgame3112");

            ps = connection.prepareStatement("INSERT INTO nghenghiep (value) VALUES (?)");
            ps.setString(1, nghenghiep.getValue());

            int rowsAffected = ps.executeUpdate();

            if (rowsAffected > 0) {
                return new ResponseEntity<>("added successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Failed to add ", HttpStatus.INTERNAL_SERVER_ERROR);
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

    @DeleteMapping("/nghenghiep/delete/{id}")
    public ResponseEntity<String> deleteNghenghiep(@PathVariable long id) {
        Connection connection = null;
        PreparedStatement ps = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/chovayonl", "root", "Endgame3112");

            ps = connection.prepareStatement("DELETE FROM nghenghiep WHERE id = ?");
            ps.setLong(1, id);

            int rowsAffected = ps.executeUpdate();

            if (rowsAffected > 0) {
                return new ResponseEntity<>(" deleted successfully", HttpStatus.OK);
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
