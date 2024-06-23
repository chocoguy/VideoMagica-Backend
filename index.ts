import express, { Express, Request, Response, Application } from 'express';
import magicvodroutes from './api/magicvodroutes'
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();




const app: Application = express();
const port = process.env.PORT || 8000;

app.use(cors())
app.use("/api/magica", magicvodroutes)

app.get("/", (req: Request, res: Response) => {
    res.send("Do not use this");
});

app.listen(port, () => {
    console.log(`Server on http://localhost:${port}`);
});


