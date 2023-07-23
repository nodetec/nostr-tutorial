import {
  validateEvent,
  verifySignature,
  getSignature,
  getEventHash,
  generatePrivateKey,
  getPublicKey,
  Event,
} from "nostr-tools";

const privateKey = generatePrivateKey();
const publicKey = getPublicKey(privateKey);

console.log("Private key:", privateKey);
console.log("Public key:", publicKey);

let event: Event = {
  kind: 1,
  created_at: Math.floor(Date.now() / 1000),
  tags: [],
  content: "hello",
  pubkey: getPublicKey(privateKey),
  id: "",
  sig: "",
};

console.log("Event:", event);

event.id = getEventHash(event);
event.sig = getSignature(event, privateKey);

console.log("Event:", event);
