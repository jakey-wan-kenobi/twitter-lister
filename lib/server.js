/**
* Put our Twitter list name and the list owner's screen name in the following to constants. See here for other options: https://github.com/zemirco/json2csv.
* @const {String} listName This is the name of the list you're trying to get user data from.
* @const {String} listOwner This is the owner of the list (the @ handle of that user).
* @const {Number} listCount This is the number of user records you want to retrieve. Max is 5,000, default is 20.
*/

require('dotenv').config()

const listName = process.env.LIST_NAME
const listOwner = process.env.LIST_OWNER
const listCount = 5000

import http from 'http'
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World\n')
}).listen(1337, '127.0.0.1')

console.log('Server running at http://127.0.0.1:1337/')

import Twit from 'twit'
const twitter = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_SECRET
  // timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

let userList = null
import createCSV from './core/createCSV'
twitter.get('lists/members', { slug: listName, owner_screen_name: listOwner, count: listCount }, function (err, data, response) {
  if (err) {
    console.log(err)
    return
  }
  userList = data.users
  createCSV(userList, listName, listOwner)
})
