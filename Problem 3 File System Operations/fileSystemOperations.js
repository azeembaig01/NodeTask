// Problem 3: File System Operations
// Develop a utility that reads a directory and lists all files with a specific extension (e.g., .txt).
// Implement this functionality using Node.js's File System module.

const fs = require("fs");
const path = require("path");

function listFilesWithExtension(directoryPath, extension) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${err}`);
      return;
    }

    const filteredFiles = files.filter(
      (file) => path.extname(file) === `.${extension}`
    );

    if (filteredFiles.length > 0) {
      console.log(`Files with .${extension} extension in ${directoryPath}:`);
      filteredFiles.forEach((file) => {
        console.log(file);
      });
    } else {
      console.log(
        `No files with .${extension} extension found in ${directoryPath}`
      );
    }
  });
}

module.exports = {
  listFilesWithExtension,
};
