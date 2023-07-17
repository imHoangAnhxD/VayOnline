// Import necessary modules
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');
const { expect } = require('chai');
const sinon = require('sinon');

// Read the HTML file and create a DOM from its content
const html = fs.readFileSync('path/to/your/admin.html', 'utf-8');
const { window } = new JSDOM(html, { runScripts: 'dangerously' });
const { document } = window;

// Define the unit tests for the admin page
describe('Admin Page Test', () => {
  let clientList;
  let nghenghiepList;
  let thunhapList;
  let sanphamvayList;
  let chinhanhList;
  let kenhvayList;

  // Before running the unit tests, find and store the necessary elements
  before(() => {
    clientList = document.getElementById('clientlist');
    nghenghiepList = document.getElementById('nghenghieplist');
    thunhapList = document.getElementById('thunhaplist');
    sanphamvayList = document.getElementById('sanphamvaylist');
    chinhanhList = document.getElementById('chinhanhlist');
    kenhvayList = document.getElementById('kenhvaylist');
  });

  // Unit test for the "Khách hàng" button
  it('should show the client list when the "Khách hàng" button is clicked', () => {
    const btnKhachHang = document.getElementById('btn1');
    btnKhachHang.click();
    expect(clientList.style.display).to.equal('block');
  });

  // Unit test for the "Nghề nghiệp" button
  it('should show the occupation list when the "Nghề nghiệp" button is clicked', () => {
    const btnNgheNghiep = document.getElementById('btn2');
    btnNgheNghiep.click();
    expect(nghenghiepList.style.display).to.equal('block');
  });

  // Unit test for the "Thu nhập" button
  it('should show the income list when the "Thu nhập" button is clicked', () => {
    const btnThuNhap = document.getElementById('btn3');
    btnThuNhap.click();
    expect(thunhapList.style.display).to.equal('block');
  });

  // Unit test for the "Sản phẩm vay" button
  it('should show the loan product list when the "Sản phẩm vay" button is clicked', () => {
    const btnSanPhamVay = document.getElementById('btn4');
    btnSanPhamVay.click();
    expect(sanphamvayList.style.display).to.equal('block');
  });

  // Unit test for the "Chi nhánh" button
  it('should show the branch list when the "Chi nhánh" button is clicked', () => {
    const btnChiNhanh = document.getElementById('btn5');
    btnChiNhanh.click();
    expect(chinhanhList.style.display).to.equal('block');
  });

  // Unit test for the "Kênh vay" button
  it('should show the loan channel list when the "Kênh vay" button is clicked', () => {
    const btnKenhVay = document.getElementById('btn6');
    btnKenhVay.click();
    expect(kenhvayList.style.display).to.equal('block');
  });

 

});
