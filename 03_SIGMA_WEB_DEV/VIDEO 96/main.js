import express from 'express';
import mongoose from 'mongoose';
import Todo from './models/Todo.js';

// 1. IMPORT ERROR
// WRONG CODE: import { title } from 'node:process';
// WHY FIXED: This was an unnecessary import that wasn't being used anywhere in your script. It just clutters the file.
// FIX: I completely removed that line.

const app = express();
const PORT = 3000;

// 2. DATABASE CONNECTION ERROR
// WRONG CODE: let connect = await mongoose.connect('mongodb://localhost:27017/')
// WHY FIXED: Connecting to the base localhost URL without specifying a database name means MongoDB will just dump your data into a default 'test' database, which can get messy later.
// FIX: Added a specific database name ('todoApp') to the end of the connection string.
let connect = await mongoose.connect('mongodb://localhost:27017/todoApp');

// 3. ASYNC/AWAIT SAVE ERROR
// WRONG CODE: 
// app.get('/', (req, res) => { ... todo.save(); res.send('Hello, World!'); });
// WHY FIXED: Saving to a database takes time. Without 'await', JavaScript moves immediately to 'res.send' before the database confirms the save. If the save fails, the user wouldn't know.
// FIX: Added 'async' to the route handler and 'await' to the save method.
app.get('/', async (req, res) => {
    let todo = new Todo({
        title: "Buy groceries",
        description: "Milk, Bread, Eggs",
        completed: false
    });
    
    await todo.save(); 
    res.send('Hello, World! Todo successfully saved.');
});

// 4. ARRAY PROPERTY & FILTERING ERROR (CRITICAL)
// WRONG CODE: 
// let todo = await Todo.find();
// res.json({title: todo.title, desc: todo.desc})
// WHY FIXED: 'Todo.find()' returns an ARRAY of objects. You cannot ask an array for '.title' (it will return undefined). Additionally, you used 'description' in your route above, but tried to call it 'desc' here.
// FIX: Renamed variable to 'todos' (plural) to represent an array. Used '.select()' to filter the output directly at the database level (removing _id, keeping title and description). Returned the whole filtered array.
app.get('/todos', async (req, res) => {
    
    let todos = await Todo.find().select('title description completed');
    
    console.log(todos);
    res.json(todos); 
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});