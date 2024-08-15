import { generateSecretKey, getPublicKey } from 'nostr-tools/pure'
import { bytesToHex, hexToBytes } from '@noble/hashes/utils' // already an installed dependency

let sk = generateSecretKey() // `sk` is a Uint8Array
let pk = getPublicKey(sk) // `pk` is a hex string

console.log(sk)
console.log(pk)

let skHex = bytesToHex(sk)
let backToBytes = hexToBytes(skHex)

console.log(skHex)
console.log(backToBytes)