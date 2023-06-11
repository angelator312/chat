const crypto = require("crypto");
function encrypt(pK, str) {
  const encryptedData = crypto.publicEncrypt(
    {
      key: pK,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    // We convert the data string to a buffer using `Buffer.from`
    Buffer.from(str)
  );
  return encryptedData.toString("base64");
}
function decrypt(prK, enStr) {
  const decryptedData = crypto.privateDecrypt(
    {
      key: prK,
      // In order to decrypt the data, we need to specify the
      // same hashing function and padding scheme that we used to
      // encrypt the data in the previous step
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    Buffer.from(enStr,"base64")
  );
  return decryptedData.toString();
}
function generateKey() {
  const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    // The standard secure default length for RSA keys is 2048 bits
    modulusLength: 2048,
  });
  return { publicKey, privateKey };
}
module.exports ={
  encrypt,decrypt,generateKey
}