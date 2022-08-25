import express from "express";
import mongoose from "mongoose";

//App config
const app = express();

const port = 8001;
const connection_url =
  "mongodb+srv://thetypo:36'ashish@cluster0.77fhjfv.mongodb.net/?retryWrites=true&w=majority";
//middleWare

//Db config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  UseUnifiedTopology: true,
});
//API Endpoints
app.get("/", (req, res) => res.status(200).send("HELLO WORLD"));

//Listener
app.listen(port, () => console.log(`Listning on port ${port}`));
