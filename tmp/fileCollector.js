const fs = require("fs");
const path = require("path");
const tar = require("tar");

// Ensure the 'tmp' folder exists
function ensureTmpFolder() {
  const tmpPath = path.join(__dirname, "tmp");
  if (!fs.existsSync(tmpPath)) {
    fs.mkdirSync(tmpPath);
  }
}

// Count the number of files in the 'tmp' folder
function countFilesInTmp() {
  const tmpPath = path.join(__dirname, "tmp");
  return fs.readdirSync(tmpPath).filter(file => fs.statSync(path.join(tmpPath, file)).isFile()).length;
}

// Archive files in 'tmp' and clean the folder
async function archiveAndCleanTmp() {
  const tmpPath = path.join(__dirname, "tmp");
  const files = fs.readdirSync(tmpPath).map(file => path.join(tmpPath, file));
  await tar.c(
    {
      gzip: true,
      file: "files.tar.gz",
    },
    files
  );

  // Clean the folder
  files.forEach(file => fs.unlinkSync(file));
  console.log("files collected");
}

// Monitor the 'tmp' folder and archive files when they reach 10
async function monitorTmpFolder() {
  ensureTmpFolder();
  const interval = setInterval(() => {
    if (countFilesInTmp() >= 10) {
      clearInterval(interval);
      archiveAndCleanTmp();
    }
  }, 1000); // Check every second
}

monitorTmpFolder();
