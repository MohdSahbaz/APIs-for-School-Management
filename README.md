# School Management API

This repository contains the implementation of a **School Management API** using **Node.js**, **Express.js**, and **MongoDB**. The API allows users to add new schools and retrieve a list of schools sorted by proximity to a user-specified location (latitude and longitude).

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [API Endpoints](#api-endpoints)
4. [Setup and Installation](#setup-and-installation)
5. [Testing the API](#testing-the-api)

---

## Project Overview

This API is designed to manage school data by providing endpoints to:

- **Add a new school**: You can create a new school record with details like name, address, latitude, and longitude.
- **List schools by proximity**: Given a user’s latitude and longitude, the API returns a list of schools, sorted by proximity to the user.

---

## Tech Stack

- **Node.js**: JavaScript runtime for server-side code.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing school data.
- **Mongoose**: ODM (Object Data Modeling) library to interact with MongoDB.

---

## API Endpoints

### 1. **POST /addSchool**
- **Description**: Adds a new school to the database.
- **Request Body**:
  ```json
  {
    "name": "School Name",
    "address": "School Address",
    "latitude": 12.9716,
    "longitude": 77.5946
  }
  ```
- **Response**:
  - `201 Created`: Successfully added the school.
  - `400 Bad Request`: Invalid input data (missing fields, invalid data types).

---

### 2. **GET /listSchools**
- **Description**: Retrieves a list of schools sorted by proximity to the given latitude and longitude.
- **Query Parameters**:
  - `latitude` (required): Latitude of the user's location.
  - `longitude` (required): Longitude of the user's location.
  
- **Response**:
  ```json
  [
    {
      "id": "1",
      "name": "School Name",
      "address": "School Address",
      "latitude": 12.9716,
      "longitude": 77.5946,
      "distance": 2.5
    },
    ...
  ]
  ```
  - Schools are sorted by distance to the provided location.

---

## Setup and Installation

Follow these steps to set up the project locally:

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (locally installed or MongoDB Atlas for cloud database)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/school-management-api.git
   ```

2. Navigate into the project directory:
   ```bash
   cd school-management-api
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB URI:
   ```env
   DB_URL=mongodb://your-mongodb-uri
   ```

5. Run the application:
   ```bash
   npm start
   ```

The server will start on `http://localhost:8080`.

---

## Testing the API

You can test the API using **Postman**.

- **POST /addSchool**:
  - Set the request method to `POST` and provide the required JSON in the body.
  
- **GET /listSchools**:
  - Set the request method to `GET` and provide the latitude and longitude as query parameters.

Example request for **GET /listSchools**:
```
GET http://localhost:8080/listSchools?latitude=12.9716&longitude=77.5946
```

---
