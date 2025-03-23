const sql = require('mssql');

const config = {
    user: 'sa',
    password : 'your_password',
    server: 'localhost',
    database: 'your_database',
    options: {
        encrypt: false
    }
};

async function dbconnect(config) {
    try{
    await sql.connect(config);
    console.log('DB connected');}
    catch(err){
        console.log(err);
    }
}

module.exports = {config, dbconnect};