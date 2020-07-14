//https://velog.io/@decody/Node.js-Express- 출처
let mysql = require("mysql");

let con = mysql.createConnection(
    {
        host : "database-1.cpodinbeph9u.ap-northeast-2.rds.amazonaws.com",
        user : "node_user",
        database : "MY_TEST",
        password : "node123test"
    }
);
var result1;

con.query("SELECT concat(author_fname, author_lname) AS 'sibal' "+
            "FROM books1;",
        function(error, result, fields){
            result1 = result;
});



var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer( (request, response) => {
    
    var pathname = url.parse(request.url).pathname


    response.writeHead(200, { 'Content-Type': 'text/plain' });
        console.log(result1);
        response.write(JSON.stringify(result1));
        response.end();

    
}).listen(8081)

console.log('Server running at http://127.0.01:8081')
