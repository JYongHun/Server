let mysql = require("mysql");

let con = mysql.createConnection(
    {
        host : "database-1.cpodinbeph9u.ap-northeast-2.rds.amazonaws.com",
        user : "node_user",
        database : "MY_TEST",
        password : "node123test"
    }
);

let insert_query = "Insert into memo (title,coment) values ('23LO','2436casde')";
con.query(insert_query,function(error, result){
    console.log(result);
});

con.query("SELECT count(*) as cnt FROM memo",
    function(error, result, fields){
        console.log(result);
        console.log(result[0].cnt);
    }    
);

con.query("SELECT * FROM memo WHERE title like ?",
            ["%h%"],
    function(error, result, fields){
        console.log(result);
    }    
);

con.end();