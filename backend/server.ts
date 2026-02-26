import express, {type Request, type Response} from 'express'
import cors from 'cors'
import {connectMongoDB} from './db/mongo';
import { connectMySQL } from './db/mysql';
import dotenv from 'dotenv'

type LeaderboardItem = {
    player: string;
    score: number;
};

dotenv.config();
const mongoURI = process.env.MONGO_URI;

const app = express();
const PORT = 3000;

connectMongoDB(mongoURI);
connectMySQL();

app.use(cors());
app.use(express.json());

app.get("/api/ping", (req: Request, res: Response) => {
    res.json({message: "OK"});
});

app.get("/api/leaderboard-summary", (req: Request, res: Response) => {
    const sumaryData: LeaderboardItem[] = [
        {player: "Spencer", score: 1},
        {player: "Raf", score: 1},
    ];
    
    res.json(sumaryData);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})