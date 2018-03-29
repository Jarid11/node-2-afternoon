require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const cors = require("cors");
const port = process.env.PORT || 3000;
const app = express();

const pc = require("./controllers/products_controller");

app.use(cors());
app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(console.log);

app.get("/api/products", pc.getAll);
app.get("/api/product/:id", pc.getOne);
app.put("/api/product/:id", pc.update);
app.post("/api/product", pc.create);
app.delete("/api/product/:id", pc.delete);

app.listen(port, console.log(`Port is running on Port: ${port}`));
