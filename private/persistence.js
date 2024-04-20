var mysql = require('mysql');

var conexao = mysql.createConnection({
  host: "localhost",
  port: 5452,
  user: "root",
  password: "test",
  database: "arthenisTest"
});

conexao.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
