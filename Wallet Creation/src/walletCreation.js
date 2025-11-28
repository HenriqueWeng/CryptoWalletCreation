//importar dependecias

const bip32 = require("bip32")
const bip39 = require("bip39")
const bitcoin = require("bitcoinjs-lib")
const ecc = require('tiny-secp256k1')


// Inicializando a fábrica BIP32
const bip32Factory = bip32.BIP32Factory(ecc)

//define rede   
//bit coin main net = mainnet
const network = bitcoin.networks.testnet

//derivacao de carteira HD
const patch = `m/84'/1'/0'/0`

//criando o mnemonic para a seed(palavras senhas)
let mnemonic = bip39.generateMnemonic()
const seed  = bip39.mnemonicToSeedSync(mnemonic)

//criando a raiz da carteira
let root = bip32Factory.fromSeed(seed, network)

//criando uma conta (PVT e PUB Keys)
let account = root.derivePath(patch)
let node = account.derive(0).derive(0)

let btcAdress = bitcoin.payments.p2wpkh({
    pubkey: node.publicKey,
    network: network,
}).address

console.log("---Carteira Moderna (Segwit) ---")
console.log("Endereço:", btcAdress)
console.log("Chave Privada (WIF):", node.toWIF())
console.log("Seed:", mnemonic)

