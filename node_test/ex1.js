let mysql = require("mysql");

let con = mysql.createConnection(
    {
        host : "database-1.cpodinbeph9u.ap-northeast-2.rds.amazonaws.com",
        user : "node_user",
        database : "MY_TEST",
        password : "node123test"
    }
);

// let insert_query = "Insert into memo (title,coment) values ('23LO','2436casde')";
// con.query(insert_query,function(error, result){
//     console.log(result);
// });

// con.query("SELECT count(*) as cnt FROM memo",
//     function(error, result, fields){
//         console.log(result);
//         console.log(result[0].cnt);
//     }    
// );

// con.query("SELECT * FROM memo WHERE title like ?",
//             ["%h%"],
//     function(error, result, fields){
//         console.log(result);
//     }    
// );

con.query("SELECT article, color FROM shirts LIMIT 20",
    function(error, result, fields){
        console.log(result);
    }    
);

// let insert_query = "INSERT INTO shirts(color, article, shirt_size, last_worn)"+
// "VALUES('Purple','polo shirt', 'M','50')";
// con.query(insert_query,function(error, result){
//     console.log(result);
// });

con.query("SELECT * FROM shirts WHERE shirt_size = 'M'",
    function(error, result, fields){
        console.log(result);
    }    
);

// con.query("UPDATE shirts SET shirt_size = 'L' WHERE article = 'polo shirt'",
//     function(error, result, fields){
//         console.log(result);
//     }    
// );

// con.query("UPDATE shirts SET last_worn = '0' WHERE last_worn = '15'",
//     function(error, result, fields){
//         console.log(result);
//     }    
// );

// con.query("UPDATE shirts SET color = 'off white',shirt_size = 'XS' WHERE color = 'orange'",
//     function(error, result, fields){
//         console.log(result);
//     }    
// );

// con.query("DELETE FROM shirts WHERE article = 'tank top'",
//     function(error, result, fields){
//         console.log(result);
//     }    
// );

con.query("DELETE FROM shirts WHERE last_worn = '200'",
    function(error, result, fields){
        console.log(result);
    }    
);

con.end();