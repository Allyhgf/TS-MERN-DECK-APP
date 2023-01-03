import express, { Request, Response } from "express";
import mongoose from 'mongoose'

import DeckModel from "../models/Deck";

const PORT = 5000
const CONNECTION_URL = "mongodb+srv://admin:admin123@cluster0.dwygu84.mongodb.net/?retryWrites=true&w=majority"

const app = express();
mongoose.set('strictQuery', false)

app.post("/decks", async (req: Request, res: Response) => {
  const newDeck = new DeckModel({
    title: "Novo deck"
  })
  const createdDeck = await newDeck.save()
  res.json(createdDeck)
})

mongoose
  .connect(CONNECTION_URL)
    .then(() => {
      console.log(`Conectado na porta ${PORT}`)
      app.listen(PORT)
    })
