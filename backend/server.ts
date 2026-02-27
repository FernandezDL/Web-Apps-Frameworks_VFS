import express, {type Request, type Response} from 'express'
import cors from 'cors'
import {connectMongoDB} from './db/mongo';
import { connectMySQL } from './db/mysql';
import dotenv from 'dotenv'
import User from './models/User';
import { MongoClient, type Db } from "mongodb";

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

app.get("/api/login", async (req: Request, res: Response) => {
    const { username, password } = req.query;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    try {
        const collection = new MongoClient(process.env.MONGO_URI).db(process.env.MONGO_DB).collection("Users");
        const user = await collection.findOne({ username: username });
        
        if (user && user.password === password) {
            res.json({ success: true, message: "Login successful", user });
        } else {
            res.json({ success: false, message: "User not found or invalid password" });
        }
    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
});

app.post("/api/contact-us", async (req: Request, res: Response) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "Name, email, and message are required" });
    }

    try{
        const collection = new MongoClient(process.env.MONGO_URI).db(process.env.MONGO_DB).collection("Contacts");
        await collection.insertOne({ name, email, message });
        res.json({ success: true, message: "Message received" });
    } catch (err) {
        console.error("Error saving contact message:", err);
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
});

app.get("/api/leaderboard", async (req: Request, res: Response) => {
    const connection = connectMySQL();
    try {
        connection.query("SELECT player_name, score FROM scores ORDER BY score DESC LIMIT 10", (err, results) => {
            if (err) {
                console.error("Error fetching leaderboard data:", err);
                return res.status(500).json({ message: "Internal server error", error: err.message });
            }
            res.json(results);        
        });
    } catch (err) {
        console.error("Error fetching leaderboard data:", err);
        res.status(500).json({ message: "Internal server error", error: err.message });
    } finally {
        connection.end();
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})