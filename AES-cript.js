const {
  scryptSync,
  createDecipheriv,
  createCipheriv,
} = require("node:crypto");
const algorithm = "aes-192-cbc";
function generateKey(password) {
  return scryptSync(password, "angelator312", 24);
}
function encrypt(key, string) {
  const iv = Buffer.from('0123456789abcdef'); //randomFillSync(new Uint8Array(16));
  const cipher = createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(string, "utf8", "base64");
  encrypted += cipher.final("base64");
  return encrypted;
}
function decrypt(key, encrypted) {
  const iv = Buffer.from('0123456789abcdef'); //Buffer.alloc(16, 0);
  const decipher = createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypted, "base64", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}
module.exports = { decrypt, generateKey, encrypt };
