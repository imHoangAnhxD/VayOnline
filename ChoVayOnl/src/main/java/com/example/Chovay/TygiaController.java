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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Chovay.Tygia;

@RestController
@CrossOrigin
public class TygiaController {
    @GetMapping("/tygia")
    public List<Tygia> getTygiaList() {
        List<Tygia> TygiaList = new ArrayList<>();

        Connection connection = null;
        PreparedStatement ps = null;
        ResultSet result = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/chovayonl", "root", "Endgame3112");
            ps = connection.prepareStatement("SELECT * FROM tygia");
            result = ps.executeQuery();

            while (result.next()) {
                int id = result.getInt("id");
                String name = result.getString("name");
                String mua = result.getString("mua");
                String ban = result.getString("ban");
                Tygia tygia = new Tygia();
                tygia.setId(id);
                tygia.setName(name);
                tygia.setMua(mua);
                tygia.setBan(ban);
                TygiaList.add(tygia);
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

        return TygiaList;
    }

    @PostMapping("/tygia/save")
    public ResponseEntity<String> addTygia(@RequestBody Tygia tygia) {
        Connection connection = null;
        PreparedStatement ps = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/chovayonl", "root", "Endgame3112");

            ps = connection.prepareStatement("INSERT INTO tygia (name,mua,ban) VALUES (?,?,?)");
            ps.setString(1, tygia.getName());
            ps.setString(2, tygia.getMua());
            ps.setString(3, tygia.getBan());
            int rowsAffected = ps.executeUpdate();

            if (rowsAffected > 0) {
                return new ResponseEntity<>(" added successfully", HttpStatus.OK);
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

    @DeleteMapping("/tygia/delete/{id}")
    public ResponseEntity<String> deleteTygia(@PathVariable long id) {
        Connection connection = null;
        PreparedStatement ps = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/chovayonl", "root", "Endgame3112");

            ps = connection.prepareStatement("DELETE FROM tygia WHERE id = ?");
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
    @GetMapping("/tygia/{id}")
    public ResponseEntity<Tygia> getTygiaById(@PathVariable long id) {
        Connection connection = null;
        PreparedStatement ps = null;
        ResultSet result = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/chovayonl", "root", "Endgame3112");

            ps = connection.prepareStatement("SELECT * FROM tygia WHERE id = ?");
            ps.setLong(1, id);
            result = ps.executeQuery();

            if (result.next()) {
                int tygiaId = result.getInt("id");
                String name = result.getString("name");
                String mua = result.getString("mua");
                String ban = result.getString("ban");
                Tygia tygia = new Tygia();
                tygia.setId(tygiaId);
                tygia.setName(name);
                tygia.setMua(mua);
                tygia.setBan(ban);

                return new ResponseEntity<>(tygia, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        } finally {
            try {
                if (result != null) {
                    result.close();
                }
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

    @PutMapping("/tygia/update/{id}")
    public ResponseEntity<String> updateTygia(@PathVariable long id, @RequestBody Tygia tygia) {
        Connection connection = null;
        PreparedStatement ps = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/chovayonl", "root", "Endgame3112");

            ps = connection.prepareStatement("UPDATE tygia SET name=?, mua=?, ban=? WHERE id=?");
            ps.setString(1, tygia.getName());
            ps.setString(2, tygia.getMua());
            ps.setString(3, tygia.getBan());
            ps.setLong(4, id);

            int rowsAffected = ps.executeUpdate();

            if (rowsAffected > 0) {
                return new ResponseEntity<>(" Cập nhật tỷ giá mới thành công", HttpStatus.OK);
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
