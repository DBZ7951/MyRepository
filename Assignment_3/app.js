const soapRequest = require('easy-soap-request');
const fs = require('fs');
var assert = require('assert');

const url = 'http://www.example.org/';
const headers = {
    //'user-agent': 'sampleTest',
    'Content-Type': 'application/soap+xml',
    'Accept-Charset': 'UTF-8'
   // 'soapAction': 'http://www.soapui.org/sample/login',
};
const xml = fs.readFileSync('example.xml', 'utf-8');

(async () => {
    const { response } = await soapRequest(url, headers, xml);
    const { body, statusCode } = response;

    console.log(body);

    console.log(statusCode);

    //get value from response xml
    var re = new RegExp("<title>(.*?)</title>", "gmi");   
    while (res = re.exec(body)) {
        var actNodeValue = res[1];
    };
    try {
        //Assert the response status code and userId
        var expStatus = statusCode;
        //var expNodeValue = "The specified credentials are already logged in";
        var expNodeValue = "Example Domain";
    
        assert.equal(200, expStatus, "Status code expected to be 200 OK");
        assert.ok(expNodeValue == actNodeValue, "Expected value of title");
    } catch (err) {
        console.log(err)
    };
})();
