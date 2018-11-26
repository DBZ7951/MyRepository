var https = require('https');
var assert = require('assert');

https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
    var data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        var respData = JSON.parse(data);
       // console.log(respData);
        try {
            //Assert the response status code and userId
            var actStatus = resp.statusCode;
            var actUserId = respData.userId;

            assert.equal(200, actStatus, "Status code expected to be 200 OK");
            assert.ok(actUserId == 1, "UserID expected to be 1");
        } catch (err) {
            console.log(err)
        };
    });
});