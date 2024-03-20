const node_redeployment_orchestrator = require('node-redeployment-orchestrator');
const node_redeployment_booster = require('node-redeployment-booster');
const webpack_cli = require('webpack-cli');
const ganache_cli = require('ganache-cli');
const debug = require('debug');
const pg = require('pg');
const socket.io = require('socket.io');
const webpack = require('webpack');
const moment = require('moment');
const passport = require('passport');
const axios = require('axios');
const sinon = require('sinon');
const mongoose = require('mongoose');
const request = require('request');
const xml2js = require('xml2js');
const validator = require('validator');

const assert = require('assert');
assert.strictEqual(1, 1, '1 should be equal to 1');

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
const dog = new Dog('Buddy');
dog.speak();

const { Readable } = require('stream');
const inStream = new Readable({
  read(size) {
    this.push(String.fromCharCode(this.currentCharCode++));
    if (this.currentCharCode > 90) { this.push(null); }
  }
});
inStream.currentCharCode = 65;
inStream.pipe(process.stdout);

// Get the list of all available accounts
web3.eth.getAccounts().then(accounts => {
  console.log('Available accounts:', accounts);
}).catch(err => {
  console.error('Error getting accounts:', err);
});

const crypto = require('crypto');
const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret).update('Hello HMAC').digest('hex');
console.log(`HMAC: ${hash}`);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

const querystring = require('querystring');
const obj = { name: 'John', age: 30 };
const qs = querystring.stringify(obj);
console.log('Query string:', qs);

const path = require('path');
console.log(`The file name is ${path.basename(__filename)}`);

// Shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const shuffledArray = shuffleArray([1, 2, 3, 4, 5]);
console.log('Shuffled array:', shuffledArray);

const findMax = (numbers) => {
  return Math.max(...numbers);
};
console.log(findMax([1, 3, 2, 8, 5]));

const http = require('http');
http.get('http://example.com', (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    console.log(data);
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});