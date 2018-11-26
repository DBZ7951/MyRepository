var request = require('request');
var assert = require('assert');

request.post({
    url: 'https://jsonplaceholder.typicode.com/posts/',
    headers: { 'content-type': 'application/json' },
    charset: 'UTF-8',
    json: { title: 'foo', body: 'bar', userId: 1 }
}, function (error, response, body) {
    console.log(body);
    //Assert the response status code and userId
    try {
        var actStatus = response.statusCode;
        var actId = body.id;

        assert.equal(201, actStatus, "Status code expected to be 201 Created");
        assert.ok(actId == 101, "id expected to be 101");

    } catch (err) {
        console.log(err)
    };
});