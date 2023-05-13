import express from "express";
import { config } from "dotenv";
import route from "./routes/index.js";

config();
const PORT = process.env.PORT | 3000;

const app = express();
// const router = express.Router();
// router.get("/", (req, res) => { 
//     res.status(200).json({
//         mesasge: "its done, ytesteting route"
//     });
// });

// router.get("/getName", (req, res) => { 
//     res.status(200).json({
//         mesasge: "Ope"
//     });
// });

/*body parser and middleware*/
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(route);


app.listen(PORT, ()=> {
    console.log('app started on port 3000', PORT);
})