// Import necessary modules
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');
const { expect } = require('chai');
const sinon = require('sinon');

// Read the HTML file and create a DOM from its content
const html = fs.readFileSync('path/to/your/login.html', 'utf-8');
const { window } = new JSDOM(html, { runScripts: 'dangerously' });
const { document } = window;

// Define the unit test for the login form
describe('Login Form Test', () => {
  let form;
  let usernameInput;
  let passwordInput;
  let submitButton;
  let ajaxStub;

  // Before running the unit tests, find and store the form elements
  before(() => {
    form = document.getElementById('loginForm');
    usernameInput = document.getElementById('username');
    passwordInput = document.getElementById('password');
    submitButton = form.querySelector('input[type="submit"]');
    ajaxStub = sinon.stub(window.$, 'ajax');
  });

  // After running the unit tests, restore the ajax stub
  after(() => {
    ajaxStub.restore();
  });

  // Unit test for successful login event
  it('should successfully log in when valid username and password are entered', () => {
    // Set values for the input fields
    usernameInput.value = 'testuser';
    passwordInput.value = 'testpassword';

    // Set up the server response
    const serverResponse = 'Login successful';
    ajaxStub.callsArgWith(0, serverResponse);

    // Trigger the form submission
    form.submit();

    // Check if the ajax function was called with the correct data and POST method
    expect(ajaxStub.calledOnce).to.be.true;
    expect(ajaxStub.firstCall.args[0]).to.deep.equal({
      type: 'POST',
      url: 'http://localhost:8080/login',
      data: JSON.stringify({
        username: 'testuser',
        password: 'testpassword'
      }),
      contentType: 'application/json',
      success: sinon.match.func,
      error: sinon.match.func
    });

    // Check if the page was redirected correctly after successful login
    expect(window.location.href).to.equal('admin.html');
  });

  // Unit test for failed login event
  it('should display error message when invalid username and password are entered', () => {
    // Set values for the input fields
    usernameInput.value = 'invaliduser';
    passwordInput.value = 'invalidpassword';

    // Set up the server response
    const serverResponse = 'Login failed';
    ajaxStub.callsArgWith(0, serverResponse);

    // Trigger the form submission
    form.submit();

    // Check if the ajax function was called with the correct data and POST method
    expect(ajaxStub.calledOnce).to.be.true;
    expect(ajaxStub.firstCall.args[0]).to.deep.equal({
      type: 'POST',
      url: 'http://localhost:8080/login',
      data: JSON.stringify({
        username: 'invaliduser',
        password: 'invalidpassword'
      }),
      contentType: 'application/json',
      success: sinon.match.func,
      error: sinon.match.func
    });

    // Check if the page was reloaded after failed login
    expect(window.location.reload.calledOnce).to.be.true;
  });

  

});
