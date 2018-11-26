var webdriver = require('selenium-webdriver');
var assert = require('assert');
By = webdriver.By;

class loginPage{

    enterLoginName(login_name) {
        //Clearing the username if any
        driver.findElement(By.name('email')).clear(); 
        driver.sleep(1000);

        //Passing the email
        driver.findElement(By.name('email')).sendKeys(login_name);
        driver.sleep(1000);
    } 

    enterPassword(password) {
        //Clearing the password field if any
        driver.findElement(By.name('password')).clear();
        driver.sleep(1000);
    
        //Passing the password
        driver.findElement(By.name('password')).sendKeys(password);
        driver.sleep(1000);
    } 

    clickLogInButton() {
        //Clicking on login button
        driver.findElement(By.xpath("//input[@type='submit']")).click();
        driver.sleep(2000);
    }

    clickLogInLink() {
        //Clicking on login link
        driver.findElement(By.xpath("//a[text()='login']")).click();
        driver.sleep(2000);
    }
    
    verifyTitle() {
        //Verifying page title
        driver.getTitle().then(function(title) {
            assert.equal("Your Store", title);
            console.log('Assert success');
        });
    
        driver.sleep(2000);
    }

    verifyErrMsg() {
        //verifying error message after invalid login
        var errMsg = driver.findElement(By.xpath("//div[contains(text(), 'Warning: No match for E-Mail Address and/or Password.')]"));
        errMsg.getText().then(function(text) {
           assert.equal("Warning: No match for E-Mail Address and/or Password.", text);
           console.log('Assert success');
        });
    
        driver.sleep(2000);
    }
    
}

module.exports = new loginPage();
