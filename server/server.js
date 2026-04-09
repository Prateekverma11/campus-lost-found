const express = require('express');
const app = express();

PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});