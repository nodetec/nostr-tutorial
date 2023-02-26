import {
  validateEvent,
  verifySignature,
  signEvent,
  getEventHash,
  generatePrivateKey,
  getPublicKey,
  Event,
} from "nostr-tools";

const privateKey = generatePrivateKey();
const publicKey = getPublicKey(privateKey);

let event: Event = {
  id: "",
  kind: 1,
  created_at: Math.floor(Date.now() / 1000),
  tags: [
    ["t", "some tag"],
    ["t", "another tag"],
  ],
  content: "hello",
  pubkey: publicKey,
  sig: "",
};

event.id = getEventHash(event);
event.sig = signEvent(event, privateKey);

let ok = validateEvent(event);
let veryOk = verifySignature(event);

console.log(event);
