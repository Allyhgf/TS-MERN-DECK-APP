import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { config } from "dotenv";

import DeckModel from "../models/Deck";

const PORT = 5000;
config();

const app = express();
app.use(express.json());
mongoose.set("strictQuery", false);

app.post("/decks", async (req: Request, res: Response) => {
  const body = req.body;
  const newDeck = new DeckModel({
    title: body.title,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
});

mongoose.connect(process.env.CONNECTION_URL!).then(() => {
  console.log(`Conectado na porta ${PORT}`);
  app.listen(PORT);
});
