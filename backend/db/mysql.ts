import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config();

// SQL configuration
const mysqlConfig = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER, // Tu usuario de MySQL
    password: process.env.MYSQL_PASSWORD, // Tu contraseña de MySQL
    database: process.env.MYSQL_DATABASE // El nombre de tu base de datos
}

const connection = mysql.createConnection(mysqlConfig)

export const connectMySQL = () => {
    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL:', err)
            throw err
        }
        console.log('MySQL connected')
    })
}

export default connection