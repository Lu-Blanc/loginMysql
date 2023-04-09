import 'dotenv/config'
import express from 'express';
import cookieParser from "cookie-parser";
import cors  from "cors";
import router from "./router/router.js"

const app = express();
const port = process.env.PORT || 2001
app.use(express.json())

app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use('/auth',router);

app.listen(port, ()=>{
    console.log(`Server Connection On ${port}`);
})