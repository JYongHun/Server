let mysql = require("mysql");

let con = mysql.createConnection(
    {
        host : "database-1.cpodinbeph9u.ap-northeast-2.rds.amazonaws.com",
        user : "node_user",
        database : "MY_TEST",
        password : "node123test"
    }
);

con.query("SELECT concat(author_fname, author_lname) AS FULLNAME "+
            "FROM books;",
    function(error, result, fields){
        console.log(result);
    }    
);

con.query("SELECT concat(substr(title,1,10),'...') AS 'short title' "+
            "FROM books;",
    function(error, result, fields){
        console.log(result);
    }    
);

con.query("SELECT concat(title,' in ', released_year) AS 'blurb' "+
            "FROM books;",
    function(error, result, fields){
        console.log(result);
    }    
);

con.query("SELECT title, length(title) AS 'character count' "+
            "FROM books;",
    function(error, result, fields){
        console.log(result);
    }    
);

// con.query("INSERT INTO books"+
//             "(title, author_fname, author_lname, released_year, stock_quantity, pages) VALUES ('10% Happier', 'Dan', 'Harris', 2014, 29, 256),"+
//             "('fake_book', 'Freida', 'Harris', 2001, 287, 428), ('Lincoln In The Bardo', 'George', 'Saunders', 2017, 1000, 367);",
//     function(error, result, fields){
//         console.log(result);
//     }    
// );

con.query("SELECT title, MAX(pages) pages "+
            "FROM books ",
    function(error, result, fields){
        console.log(result);
    }    
);

con.query("SELECT * "+
            "FROM books "+
            "WHERE title LIKE '%the%'",
    function(error, result, fields){
        console.log(result);
    }    
);

con.query("SELECT released_year, count(*) cnt "+
            "FROM books "+
            "GROUP BY released_year "+
            "ORDER BY released_year",
    function(error, result, fields){
        console.log(result);
    }    
);

con.query("SELECT released_year, count(*) cnt, AVG(pages)"+
            "FROM books "+
            "GROUP BY released_year "+
            "ORDER BY released_year",
    function(error, result, fields){
        console.log(result);
    }    
);




con.end();