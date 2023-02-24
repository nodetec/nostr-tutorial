import { generatePrivateKey, getPublicKey } from 'nostr-tools';

const privateKey = generatePrivateKey();
const publicKey = getPublicKey(privateKey);

console.log('Private key:', privateKey);
console.log('Public key:', publicKey);
