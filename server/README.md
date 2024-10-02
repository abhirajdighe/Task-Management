# Task Management Application

## Project Description
This Task Management Application allows users to create, update, and delete tasks efficiently. The application utilizes a client-server architecture, where the client is built with Tailwind, React.js and the server is built with Node.js and Express. The project uses MySQL for data storage, providing a robust backend to manage tasks effectively.

## Technologies Used
- **Server**: 
  - Node.js
  - Express
  - Sequelize (ORM for MySQL)
  - MySQL
- **Development Tools**:
  - Visual Studio Code
  - Postman (for API testing)

---

## Server Setup

### Prerequisites
Before you start, make sure you have the following installed on your machine:
- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **npm**: Comes with Node.js installation.
- **Mysql**: [Download and install mysql](https://www.mysql.com/)
- **Visual Studio Code**: [Download and install Visual Studio Code](https://code.visualstudio.com/)

### Configuration
Before running the server, you need to configure the database connection. Create a file named config/config.json and add the following configuration:

 ```json
    {
      "development": {
        "username": "root",
        "password": "<ADD_YOUR_MYSQL_PASSWORD>",
        "database": "Task_Management_DB_DEV",
        "host": "127.0.0.1",
        "dialect": "mysql"
      }
 ```
    Replace `<ADD_YOUR_MYSQL_PASSWORD>` with your actual MySQL password.

### How to Start Server
1. **Navigate to the server directory**
    cd server
2. **Install dependencies**:
   npm install
3. **Navigate to the src directory**
   cd src
4. **Create the database**
    npx sequelize db:create
5. **Run migrations**
    npx sequelize db:migrate
6. **Start the server**
    npm start
7. The server should now be running on **http://localhost:3001**

## Additional Notes
- Ensure that your MySQL server is running before starting the application.
- You can use Postman to test the API endpoints provided by the server.
