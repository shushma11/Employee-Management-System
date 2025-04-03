# Employee Management System

## Overview
The Employee Management System is a web application that allows users to manage employee records. Users can add, update, delete, and view employee details. The system is built using React.js for the frontend, Spring Boot for the backend, and MySQL as the database.

## Tech Stack
- **Frontend:** React.js, Bootstrap
- **Backend:** Spring Boot
- **Database:** MySQL

## Features
- Add new employees
- Update employee details
- Delete employees
- View a list of employees

## Setup Instructions

### Prerequisites
Make sure you have the following installed:
- Node.js
- Java (JDK 21 or higher)
- MySQL
- Spring Boot

### Backend Setup
1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```sh
   cd backend
   ```
3. Configure MySQL Database:
   - Update `application.properties` with your MySQL credentials:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/employees_db
     spring.datasource.username=root
     spring.datasource.password=yourpassword
     ```
4. Build and run the backend:
   ```sh
   mvn spring-boot:run
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm start
   ```

## API Endpoints
### Employee API
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/employees` | Create a new employee |
| `GET` | `/api/employees/{id}` | Get employee by ID |
| `GET` | `/api/employees/all` | Get all employees |
| `PUT` | `/api/employees/{id}` | Update employee details |
| `DELETE` | `/api/employees/{id}` | Delete employee |

## Project Structure
```
Employee-Management-System/
│── backend/
│   ├── src/main/java/com/example/ems/
│   │   ├── controller/
│   │   │   ├── EmployeeController.java
│   │   ├── service/
│   │   │   ├── EmployeeService.java
│   │   │   ├── impl/EmployeeServiceImpl.java
│   │   ├── repository/
│   │   │   ├── EmployeeRepository.java
│   │   ├── dto/
│   │   │   ├── EmployeeDto.java
│   │   ├── entity/
│   │   │   ├── Employee.java
│   ├── src/main/resources/
│   │   ├── application.properties
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ListEmployeeComp.js
│   │   │   ├── EmployeeComponent.js
│   │   ├── App.js
│── README.md
```

## Usage
1. Run the backend first using `mvn spring-boot:run`.
2. Run the frontend using `npm start`.
3. Open the browser and navigate to `http://localhost:3000`.

## License
This project is licensed under the MIT License.

