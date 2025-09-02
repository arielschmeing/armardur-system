# Armardur System API

A comprehensive REST API for the Armardur RPG system, providing complete backend functionality for managing users, characters, classes, skills, and game mechanics.

## 🎮 Overview

Armardur System is a web application backend designed to power the Armardur RPG system. It provides a robust API for character creation, skill management, class systems, and user authentication, making it perfect for building RPG game applications or character management tools.

## ✨ Features

- **User Management**: Complete user registration, authentication, and role-based access control
- **Character System**: Create and manage RPG characters with attributes, races, and customization
- **Class System**: Define and manage character classes with unique properties
- **Skill Management**: Create skills with various attributes like level, range, duration, and elemental affinities
- **JWT Authentication**: Secure API endpoints with token-based authentication
- **Role-Based Access**: Support for different user roles (USER, ADMIN)
- **Expertise System**: Add and manage character expertises
- **Elemental System**: Support for elemental attributes and magic branches

## 🚀 Getting Started

### Prerequisites

- Java 17 or higher
- Maven or Gradle
- PostgreSQL or your preferred database
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/arielschmeing/armardur-system.git
cd armardur-system
```

2. Configure your database connection in `application.properties`:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/armardur
spring.datasource.username=your_username
spring.datasource.password=your_password
```

3. Build the project:
```bash
mvn clean install
```

4. Run the application:
```bash
mvn spring-boot:run
```

The API will be available at `http://localhost:8080`

## 📡 API Endpoints

### Authentication

#### Register User
```http
POST /users
Content-Type: application/json

{
  "name": "Ariel",
  "email": "ariel@proton.me",
  "password": "123"
}
```

#### Login
```http
POST /users/login
Content-Type: application/json

{
  "email": "ariel@proton.me",
  "password": "123"
}
```
Returns a JWT token for authenticated requests.

### User Management

#### Get All Users
```http
GET /users
Authorization: Bearer {token}
```

#### Get User by ID
```http
GET /users/{id}
Authorization: Bearer {token}
```

#### Update User Name
```http
PUT /users/{id}/name
Authorization: Bearer {token}
Content-Type: application/json

{
  "nome": "New Name"
}
```

#### Update Password
```http
PUT /users/{id}/password
Authorization: Bearer {token}
Content-Type: application/json

{
  "senha": "newPassword"
}
```

#### Add Role to User
```http
PUT /users/{id}/role
Authorization: Bearer {token}
Content-Type: application/json

{
  "role": "ADMIN"
}
```

### Character Management

#### Create Character
```http
POST /characters/class/{classId}
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "RODOLFO",
  "race": "HUMAN",
  "image": "https://example.com/image.jpg",
  "hp": 19,
  "strength": 12,
  "dexterity": 14,
  "constitution": 10,
  "mental": 16,
  "wisdom": 18,
  "charisma": 12,
  "elemental": 20
}
```

#### Get All Characters
```http
GET /characters
Authorization: Bearer {token}
```

#### Get Character by ID
```http
GET /characters/{id}
Authorization: Bearer {token}
```

#### Update Character Level
```http
PUT /characters/{id}/update/level
Authorization: Bearer {token}
Content-Type: application/json

{
  "value": 15
}
```

#### Add Expertise to Character
```http
PUT /characters/{id}/expertise
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "STEALTH"
}
```

#### Remove Expertise from Character
```http
DELETE /characters/{id}/expertise
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "STEALTH"
}
```

#### Add Element to Character
```http
PUT /characters/{id}/element
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "ASTRALITH"
}
```

#### Add Skill to Character
```http
PUT /characters/{characterId}/skill/{skillId}
Authorization: Bearer {token}
```

### Class Management

#### Create Class
```http
POST /classes
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Mago Necromance",
  "description": "Masters of arcane arts...",
  "difficultClass": "10",
  "dieHealth": "8",
  "baseHealth": "10",
  "physicalMod": "STRENGTH",
  "casterMod": "MENTAL"
}
```

#### Get All Classes
```http
GET /classes
Authorization: Bearer {token}
```

#### Get Class by ID
```http
GET /classes/{id}
Authorization: Bearer {token}
```

#### Bind Skill to Class
```http
PUT /classes/{classId}/level/{level}/skill/{skillId}
Authorization: Bearer {token}
```

#### Remove Skill from Class
```http
DELETE /classes/{classId}/level/{level}/skill/{skillId}/remove
Authorization: Bearer {token}
```

### Skill Management

#### Create Skill
```http
POST /skills
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Bola de Plasma",
  "level": 2,
  "range": 2,
  "duration": 3,
  "castTime": 1,
  "description": "Uma magia poderosa!",
  "branches": ["AURA", "DEFENSE"],
  "elements": ["LUMINOS", "IGNIS"]
}
```

#### Get All Skills
```http
GET /skills
Authorization: Bearer {token}
```

## 🔐 Authentication

The API uses JWT (JSON Web Token) for authentication. After successful login, include the token in the Authorization header for protected endpoints:

```
Authorization: Bearer eyJhbGciOiJSUzI1NiJ9...
```

## 📊 Data Models

### User
- `id`: Unique identifier
- `name`: User's name
- `email`: User's email (unique)
- `password`: Encrypted password
- `roles`: User roles (USER, ADMIN)

### Character
- `id`: Unique identifier
- `name`: Character name
- `race`: Character race (e.g., HUMAN)
- `image`: Character portrait URL
- `hp`: Health points
- `strength`: Strength attribute
- `dexterity`: Dexterity attribute
- `constitution`: Constitution attribute
- `mental`: Mental attribute
- `wisdom`: Wisdom attribute
- `charisma`: Charisma attribute
- `elemental`: Elemental power
- `level`: Character level
- `class`: Associated class
- `skills`: List of learned skills
- `expertises`: List of character expertises
- `elements`: List of elemental affinities

### Class
- `id`: Unique identifier
- `name`: Class name
- `description`: Class description
- `difficultClass`: Difficulty rating
- `dieHealth`: Health die type
- `baseHealth`: Base health value
- `physicalMod`: Physical modifier attribute
- `casterMod`: Caster modifier attribute
- `skills`: Skills available to the class

### Skill
- `id`: Unique identifier
- `name`: Skill name
- `level`: Required level
- `range`: Skill range
- `duration`: Skill duration
- `castTime`: Casting time
- `description`: Skill description
- `branches`: Magic branches (e.g., AURA, DEFENSE)
- `elements`: Elemental types (e.g., LUMINOS, IGNIS)

## 🛠️ Technologies

- **Spring Boot**: Framework for building the REST API
- **Spring Security**: Authentication and authorization
- **JWT**: Token-based authentication
- **JPA/Hibernate**: Object-relational mapping
- **PostgreSQL**: Database (configurable)
- **Maven/Gradle**: Build automation

## 📝 Environment Variables

Configure these environment variables for production:

```bash
DATABASE_URL=jdbc:postgresql://localhost:5432/armardur
DATABASE_USERNAME=your_username
DATABASE_PASSWORD=your_password
JWT_SECRET=your_jwt_secret_key
SERVER_PORT=8080
```

## 🧪 Testing

Run the test suite:

```bash
mvn test
```

For integration tests:

```bash
mvn verify
```

## 📚 API Documentation

For detailed API documentation, you can:
1. Import the provided HTTPie collection (`httpie-collection-armardur.json`)
2. Access Swagger UI at `http://localhost:8080/swagger-ui.html` (if configured)
3. Use the endpoints listed above with tools like Postman, HTTPie, or cURL

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Ariel Schmeing**

- GitHub: [@arielschmeing](https://github.com/arielschmeing)

---

**Note**: This is the backend API for the Armardur RPG system. For the frontend application or game client, please refer to the respective repositories.