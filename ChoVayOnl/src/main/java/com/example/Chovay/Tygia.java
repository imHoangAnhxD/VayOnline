package com.example.Chovay;

public class Tygia {
	 private int id;
	 private String name;
	    private String mua;
	    private String ban;
	    public Tygia() {
	    }

	    public Tygia(int id,String name,String mua, String ban) {
	        this.id=id;
	        this.name=name;
	    	this.mua = mua;
	    	this.ban = ban;
	    }

	    public int getId() {
	        return id;
	    }
	    public void setId(int id){
	    	 this.id=id;
	    }
	    public String getName() {
	        return name;
	    }
	    public void setName(String name){
	    	 this.name=name;
	    }
	    

	    public String getMua() {
	        return mua;
	    }

	    public void setMua(String mua) {
	        this.mua = mua;
	    }
	    public String getBan() {
	        return ban;
	    }

	    public void setBan(String ban) {
	        this.ban = ban;
	    }
}
