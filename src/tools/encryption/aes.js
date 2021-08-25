import CryptoJS from 'crypto-js'

function generateKey(salt, passPhrase) {
    const keySize = 128 / 32;
    const iterationCount = 1000;
    let key = CryptoJS.PBKDF2(
    passPhrase, 
    CryptoJS.enc.Hex.parse(salt),
    { keySize: keySize, iterations: iterationCount });
    return key;
};
  
export function encrypt(salt, iv, passPhrase, plainText) {
    let key = generateKey(salt, passPhrase);
    let encrypted = CryptoJS.AES.encrypt(
        plainText,
        key,
        { iv: CryptoJS.enc.Hex.parse(iv) });
    return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
};
  
export function decrypt(salt, iv, passPhrase, cipherText) {
    let key = generateKey(salt, passPhrase);
    let cipherParams = CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Base64.parse(cipherText)
    });
    let decrypted = CryptoJS.AES.decrypt(
        cipherParams,
        key,
        { iv: CryptoJS.enc.Hex.parse(iv) });
    return decrypted.toString(CryptoJS.enc.Utf8);
};