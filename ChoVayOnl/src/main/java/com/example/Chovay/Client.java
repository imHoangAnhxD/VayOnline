package com.example.Chovay;

public class Client {
	private int id;
	private String hoten;
	private String cmnd;
	private String diachi;
	private String tel;
	private String email;
	private String nghenghiep;
	private String thunhap;
	private String sanphamchovay;
	private int tienvay;
	private int thoigian;
	private String chinhanh;
	private String kenhvay;
	public Client(int id, String hoten, String cmnd, String diachi,String tel,String email,String nghenghiep,String thunhap,String sanphamchovay,int tienvay,int thoigian,String chinhanh, String kenhvay) {
		this.id=id;
		this.hoten=hoten;
		this.cmnd=cmnd;
		this.diachi=diachi;
		this.tel=tel;
		this.email=email;
		this.nghenghiep=nghenghiep;
		this.thunhap=thunhap;
		this.sanphamchovay=sanphamchovay;
		this.tienvay=tienvay;
		this.thoigian=thoigian;
		this.chinhanh=chinhanh;
		this.kenhvay=kenhvay;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCmnd() {
		return cmnd;
	}
	public void setCmnd(String cmnd) {
		this.cmnd = cmnd;
	}
	public String getHoten() {
		return hoten;
	}
	public void setHoten(String hoten) {
		this.hoten = hoten;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getDiachi() {
		return diachi;
	}
	public void setDiachi(String diachi) {
		this.diachi = diachi;
	}
	public String getNghenghiep() {
		return nghenghiep;
	}
	public void setNghenghiep(String nghenghiep) {
		this.nghenghiep = nghenghiep;
	}
	public String getThunhap() {
		return thunhap;
	}
	public void setThunhap(String thunhap) {
		this.thunhap = thunhap;
	}
	public int getTienvay() {
		return tienvay;
	}
	public void setTienvay(int tienvay) {
		this.tienvay = tienvay;
	}
	public int getThoigian() {
		return thoigian;
	}
	public void setThoigian(int thoigian) {
		this.thoigian = thoigian;
	}
	public String getSanphamchovay() {
		return sanphamchovay;
	}
	public void setSanphamchovay(String sanphamchovay) {
		this.sanphamchovay = sanphamchovay;
	}
	public String getChinhanh() {
		return chinhanh;
	}
	public void setChinhanh(String chinhanh) {
		this.chinhanh = chinhanh;
	}
	public String getKenhvay() {
		return kenhvay;
	}
	public void setKenhvay(String kenhvay) {
		this.kenhvay = kenhvay;
	}
}
	