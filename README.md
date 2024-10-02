# Task Management Application

## Project Description
This Task Management Application allows users to create, update, and delete tasks efficiently. The application utilizes a client-server architecture, where the client is built with Tailwind, React.js and the server is built with Node.js and Express. The project uses MySQL for data storage, providing a robust backend to manage tasks effectively.

## Technologies Used
### Client:
![React](https://img.shields.io/badge/-React.js-61DAFB?logo=react&logoColor=black&style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white&style=for-the-badge)
![Axios](https://img.shields.io/badge/-Axios-5A29E4?logo=axios&logoColor=white&style=for-the-badge)

### Server:
![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge)
![Express](https://img.shields.io/badge/-Express.js-000000?logo=express&logoColor=white&style=for-the-badge)
![Sequelize](https://img.shields.io/badge/-Sequelize-52B0E7?logo=sequelize&logoColor=white&style=for-the-badge)
![MySQL](https://img.shields.io/badge/-MySQL-4479A1?logo=mysql&logoColor=white&style=for-the-badge)

### Development Tools:
![Visual Studio Code](https://img.shields.io/badge/-Visual%20Studio%20Code-007ACC?logo=visual-studio-code&logoColor=white&style=for-the-badge)
![Postman](https://img.shields.io/badge/-Postman-FF6C37?logo=postman&logoColor=white&style=for-the-badge)

---

## Client Setup

### Prerequisites
Before you start, make sure you have the following installed on your machine:
- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **npm**: Comes with Node.js installation.
- **Visual Studio Code**: [Download and install Visual Studio Code](https://code.visualstudio.com/)

### How to Start the Client
1. **Clone the repository**:
   git clone <repository-url>
   cd client
2. **Install dependencies**:
   npm install
3. **Start the client**
   npm start
4. Open your browser and navigate to **http://localhost:3000** to view the application.

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
    "password": "<ADD Your Password>",
    "database": "Task_Management_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
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
  
## Frontend Interface Images
![Task Management Application Image 1](https://github.com/abhirajdighe/Task-Management/blob/main/assets/img1.png?raw=true)
![Task Management Application Image 2](https://github.com/abhirajdighe/Task-Management/blob/main/assets/img2.png?raw=true)
![Task Management Application Image 3](https://github.com/abhirajdighe/Task-Management/blob/main/assets/img3.png?raw=true)
