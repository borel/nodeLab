const fs = require("fs");
const dns = require("dns");
const crypto = require("crypto");

console.log("Hello before");

fs.readFile("file.txt", "utf8", (error, resolv) => {
  if (error) {
    console.log("error", error);
  }
  console.log("resolv.", resolv);
  console.log("done");
});

dns.resolve4("nodejs.org", (error, resolv) => {
  if (error) {
    console.log("error", error);
  }
  console.log("resolv.", resolv);
  console.log("done");
});

const key = crypto.pbkdf2Sync("secret", "salt", 1000, 64, "sha512");
console.log("sync_key", { key });

crypto.pbkdf2("secret", "salt", 1000, 64, "sha512", (error, key) => {
  if (error) {
    console.log("crypto sync error", error);
  }
  console.log("async_key", { key });
});

console.log("Hello after");
