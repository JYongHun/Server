let mysql = require("mysql");

let con = mysql.createConnection(
    {
        host : "database-1.cpodinbeph9u.ap-northeast-2.rds.amazonaws.com",
        user : "node_user",
        database : "MY_TEST",
        password : "node123test"
    }
);

con.query("SELECT * FROM users LIMIT 30",
    function(error, result, fields){
        console.log(result);
    }    
);

con.query("SELECT email, min(created_at) FROM users Limit 1",
    function(error, result, fields){
        console.log(result);
    }    
);

con.query("SELECT COUNT(*) AS COUNT, MonthNAME(created_at) AS MONTH "+
            "FROM users "+
            "GROUP BY MONTH "+
            "ORDER BY COUNT DESC",
    function(error, result, fields){
        console.log(result);
    }    
);

con.query("SELECT * "+
            "FROM users "+
            "WHERE email LIKE '%yahoo%' "+
            "LIMIT 20",
    function(error, result, fields){
        console.log(result);
    }    
);

con.query("SELECT COUNT(*) AS CNT "+
            "FROM users "+
            "WHERE email LIKE '%yahoo%' ",
    function(error, result, fields){
        console.log(result);
    }    
);

con.end();