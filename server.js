const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const TIPS_FILE = "./tips.json";

//  Get all tips
app.get("/tips", (req, res) => {
  const tips = JSON.parse(fs.readFileSync(TIPS_FILE));
  res.json(tips);
});

//  Add new tip
app.post("/tips", (req, res) => {
  const { author, text } = req.body;
  if (!text) return res.status(400).json({ message: "Tip text is required" });

  const tips = JSON.parse(fs.readFileSync(TIPS_FILE));
  tips.push({ author, text });
  fs.writeFileSync(TIPS_FILE, JSON.stringify(tips, null, 2));

  res.status(201).json({ message: "Tip added successfully" });
});

//  Start server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
