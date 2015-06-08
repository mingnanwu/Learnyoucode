var fs = require('fs');

var file = fs.readFileSync(process.argv[2]);

var con  = file.toString();


console.log(con.split('\n').length - 1);
