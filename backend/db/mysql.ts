import mysql from 'mysql2';

export const connectMySQL = () => {
    const connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB
    });

    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            return;
        }
        console.log('MySQL connected');
    });

    return connection;
};