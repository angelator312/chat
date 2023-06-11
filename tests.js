const RSA = require("./RSA-cript");
const AES=require("./AES-cript");
const { publicKey, privateKey } = RSA.generateKey();
const encrypted = RSA.encrypt(publicKey, 'Test in RSA');
console.log(encrypted);
console.log(RSA.decrypt(privateKey,encrypted))
const key = AES.generateKey('Zaro is cool member.');
const AEncrypted = AES.encrypt(key, 'Test in AES');
console.log(AEncrypted);
console.log(AES.decrypt(key,AEncrypted))
