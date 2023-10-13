package com.example.Chovay;

public class Admin {
	 private int id;

	    private String username;
	    private String password;
	    private String name;
	    private String role;
	    private String tel;
	    private String email;
	    private String room;
	    public Admin() {
	    }

	    public Admin(int id,String username, String password,String name, String role, String tel,String email,String room) {
	        this.id=id;
	    	this.username = username;
	    	this.password=password;
	    	this.setName(name);
	    	this.setRole(role);
	    	this.setTel(tel);
	    	this.setEmail(email);
	    	this.setRoom(room);
	    }

	    
	    public void setId(int id){
	    	 this.id=id;
	    }
	    public int getId() {
	        return id;
	    }

	    public String getUsername() {
	        return username;
	    }

	    public void setUsername(String username) {
	        this.username = username;
	    }
	    
	    public String getPassword() {
	        return password;
	    }

	    public void setPassword(String password) {
	        this.password = password;
	    }

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getRole() {
			return role;
		}

		public void setRole(String role) {
			this.role = role;
		}

		public String getTel() {
			return tel;
		}

		public void setTel(String tel) {
			this.tel = tel;
		}

		public String getRoom() {
			return room;
		}

		public void setRoom(String room) {
			this.room = room;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}
}
