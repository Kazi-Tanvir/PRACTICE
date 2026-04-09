import mongoose from "mongoose";
import express from "express";
import Employee from "./models/employees.js";
import generateEmployee from "./utils/dataGenerator.js";

const app = express();
app.use(express.json());
const PORT = 3000;

await mongoose.connect('mongodb://localhost:27017/Company2DB');

app.get('/', async (req, res) => {
    // 1. Clear existing data (optional)
    // await Employee.deleteMany({});

    // 2. Generate 10 random employees
    for (let i = 0; i < 10; i++) {
        let e = await Employee.insertMany([generateEmployee()]);
        console.log(e);
    }
    res.send("Data Generated!");
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
