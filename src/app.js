import express from "express";
import { config } from "dotenv";
import route from "./routes/index.js";
import { DBConnection } from "./config/connection.js";

config();
/** ensure you provide the database connection string in the db connection method */
DBConnection();
const PORT = process.env.PORT | 3000;

const app = express();

/*body parser and middleware*/
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(route);


app.listen(PORT, ()=> {
    console.log('app started on port 3000', PORT);
})