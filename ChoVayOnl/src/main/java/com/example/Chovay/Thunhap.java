package com.example.Chovay;

public class Thunhap {
   
    private int id;

    private String value;

    public Thunhap() {
    }

    public Thunhap(int id,String value) {
        this.id=id;
    	this.value = value;
    }

    
    public void setId(int id){
    	 this.id=id;
    }
    public int getId() {
        return id;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
