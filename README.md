# Web-Apps-Frameworks_VFS
Assignments for the Web App Frameworks Class at VFS

## A2 Description
In this assignment 3 endpoints have been created:
- Login enpoint: this endpoint takes in a username and a password and searches the database for those credentials, in case they are found the login will be permited and the page will change into the `Leaderboard page`
- Leaderboard endpoint: this endpoint gets all the registries from the scores table, orders them based on the score and grabs the first 10 values
- Contact us enpoint: with this enpoint, new contact data can be written in the database. The enpoint takes a name, an email and a message and stores the values in the database.

## Run the code
The code need to be downloaded from [Github](https://github.com/FernandezDL/Web-Apps-Frameworks_VFS.git).

### Env file
This project uses a `.env` file for the local variables. For this create a file named `.env` in the `backend` folder and paste this code.

```code
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=spencer
MYSQL_DB=A2
MONGO_URI=mongodb+srv://diana:spencer@clusterdeprueba.2rkmza4.mongodb.net/A2?retryWrites=true&w=majority
MONGO_DB=A2
```

### Run commands
When the code has been downloaded, and the file has been set, the user has to open 2 `cmd terminals`, one in the `frontend` folder and one in the `backend` folder.

In each folder, install the dependencies with the command:
```code
npm install
```

And then run both projects with the command:

```code
npm run dev
```
When that command has finished running in the frontend terminal will appear a link to open the project in the web.

## Github
[GitHub code here](https://github.com/FernandezDL/Web-Apps-Frameworks_VFS.git)

## Author
PG29 Diana Lucia Fernandez Villatoro
