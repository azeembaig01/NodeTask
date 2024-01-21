// File: app.js

const express = require("express");
const fileSystemOperations = require("./Problem 3 File System Operations/fileSystemOperations");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const PORT = 3000;

mongoose.connect("mongodb://localhost:27017/crud", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(routes);

const authMiddleware = require('./authMiddleware');
app.use(authMiddleware);

// Example usage:
const directoryPath = "./Problem 3 File System Operations/upload";
const extension = "txt";
fileSystemOperations.listFilesWithExtension(directoryPath, extension);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
