const fs = require("fs");
const readline = require("readline");

const readFile = fs.createReadStream("../../access.log", "utf8");
const firstFile = fs.createWriteStream("../../89.123.1.41_requests.log");
const secondFile = fs.createWriteStream("../../34.48.240.111_requests.log");

const rl = readline.createInterface({
  input: readFile,
  terminal: true,
});

rl.on("line", (line) => {
  if (line.includes("89.123.1.41")) {
    firstFile.write(line + "\n");
  }

  if (line.includes("34.48.240.111")) {
    secondFile.write(line + "\n");
  }
});
