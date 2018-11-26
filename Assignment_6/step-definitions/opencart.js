var loginPage = require('../page-objects/loginpage');

module.exports = function () {

  this.Given(/^user navigates to "([^"]*)"$/, function (url) {
    driver.get(url);
  
  });


  this.Given(/^user verifies title$/, function () {
    // Write code here that turns the phrase above into concrete actions
    loginPage.verifyTitle();
  });


  this.When(/^user enters the invalid login name "([^"]*)"$/, function (login_name) {
    loginPage.clickLogInLink();
    
    loginPage.enterLoginName(login_name);
  });

  this.When(/^enters the invalid password "([^"]*)"$/, function (password) {
    // Write code here that turns the phrase above into concrete actions
    loginPage.enterPassword(password);
  });


  this.Then(/^click on Login button$/, function () {
    // Write code here that turns the phrase above into concrete actions
    loginPage.clickLogInButton();
  });


  this.Then(/^verify the error message$/, function () {
    // Write code here that turns the phrase above into concrete actions
     loginPage.verifyErrMsg();
     
  });
};