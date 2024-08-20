//importing the necessary modules

//web framework and API
// default import/export from the ES6 module only the main function
import express from 'express';
import cors from 'cors';

// import and autmatically loads env variable from .env to process.env - ES6 syntax
//dotenv.config();
import "dotenv/config";

//named import from the express module
// in ES6 modules one can have only one default and others are named functions
import  {Request, Response} from 'express';

//abstract more easier way to connect and interact without native mongodb with complex qeueries  - an ODM library for ode.js and MongoDB
import mongoose from 'mongoose';

//can use custom names when importing default modules 
import  userRoutes from "./routes/users";
import authRoutes from "./routes/auth";

import cookieParser from "cookie-parser";

// the value could be undefined as well but not necessary 
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);


// creates an instance of express app
// to define endpoints / middleware / start the server
const app = express();
app.use(cookieParser());

// calling middleware function to convert json data from clients in http req body to JS objects
app.use(express.json());

// middleware function for url encoded data eg- html form data (key value pairs) with nested data(complex not just flat key value pairs) with exteded option/parameter
app.use(express.urlencoded({extended: true}));

// a security feature - in default allow resource sharing from any origin(domain- adress for internet resources/websites) frontend at 5000 and backend at 3000
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true,
}));

//app.get(path, handler function)
// async function allow to use await
// req and res are object with methods and properties here type also sepcified 
// used only for testing purpose 

// app.get("/api/test", async( req:Request, res:Response) => {
//     res.json({message: "hello from express endpoint!"});
// });

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

//127.0.0.1
//app.listen(port as an argument, [hostname - optional -if not specified localhost], [callback function - for logging or initialization]);
// if empty it listen from any host
app.listen(8000, "localhost",()=>{
    console.log("server is running on localhost:8000");
});



