import express from 'express';

const router = express.Router();


// user login api - api/users/login
router.post("/login",[ check("email": "")])
