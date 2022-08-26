import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import cors from "cors";
//App config
const app = express();

const port = 8001;
const connection_url =
  "mongodb+srv://thetypo:36'ashish@cluster0.77fhjfv.mongodb.net/?retryWrites=true&w=majority";
//middleWare
app.use(express.json());
app.use(cors());
//Db config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  //useCreateIndex: true,
  UseUnifiedTopology: true,
});
//API Endpoints
app.get("/", (req, res) => res.status(200).send("HELLO WORLD"));
app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listener
app.listen(port, () => console.log(`Listning on port ${port}`));
