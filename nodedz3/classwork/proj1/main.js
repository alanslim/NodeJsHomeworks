const prompt = require("prompt-sync")()

const log = console.log;

let username = prompt("Hello, what's your name? ")
log(`Nice to meet you ${username}!`)
