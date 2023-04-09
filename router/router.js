import { Router } from "express";
import { Signup, getUsers, Signin, Logout } from "../controller/usercontroler.js";
import {verifyToken} from "../middleware/VerifyToken.js"
const route = Router();

route.post('/signup', Signup);
route.get('/users',verifyToken, getUsers);
route.post('/signin', Signin);
route.delete('/logout', Logout);

export default route