# CRUD_App

A simple Node.js CRUD application using Express and MongoDB (Mongoose).

## Features

- Create, Read, Update, Delete (CRUD) operations for tutorials
- RESTful API endpoints
- MongoDB database integration

## Project Structure

```
CRUD_App/
├── config/
│   └── db.config.js
├── controllers/
│   └── tutorial.controller.js
├── models/
│   ├── index.js
│   └── tutorial.model.js
├── routes/
│   └── tutorial.routes.js
├── node_modules/
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shubhamrathore010/CRUD_App.git
   cd CRUD_App
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure MongoDB:**
   - Edit `config/db.config.js` and set your MongoDB connection string.

4. **Start the server:**
   ```bash
   node server.js
   ```

5. **API Endpoints:**

   - `POST   /api/tutorials`           - Create a new tutorial
   - `GET    /api/tutorials`           - Get all tutorials
   - `GET    /api/tutorials/:id`       - Get a tutorial by ID
   - `PUT    /api/tutorials/:id`       - Update a tutorial by ID
   - `DELETE /api/tutorials/:id`       - Delete a tutorial by ID
   - `DELETE /api/tutorials`           - Delete all tutorials
   - `GET    /api/tutorials/published` - Get all published tutorials

## .gitignore

Make sure you have a `.gitignore` file to exclude `node_modules`:

```
node_modules/
.env
npm-debug.log
```

##
