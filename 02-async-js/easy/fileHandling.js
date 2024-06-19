const fs = require("fs");

function readContent(err, data) {
  if (err) console.log(err);
  else console.log(data);
}
const fileContent = fs.readFile("a.txt", "utf-8", readContent);
var cnt = 0;
for (var i = 0; i < 1000000000; i++) {
  cnt++;
}

//write a file
function callback(err) {
  if (err) console.log(err);
}
let data = "changed data";
const writeFile = fs.writeFile("a.txt", data, "utf-8", callback);
