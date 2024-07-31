import express, {Request, Response} from 'express';
import { check, validationResult } from 'express-validator';
import User from '../models/user';
import bcrypt from 'bcryptjs';

const router = express.Router();


// user login api - api/users/login
router.post("/login",[
    check("email","Email is required").isEmail(), 
    check("password", "Password with 6 or more characters Required").isLength({min:6})
], async (req: Request, res:Response) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({message:errors.array()});
    }

    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});

        if (!user) {
            return res.status(400).json({message:"Invalid Credentials"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({message:"Invalid Credentials"});
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "something went wrong"});
    }

    

});
