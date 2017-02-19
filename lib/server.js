require('dotenv').config()

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

twitter.get('lists/members', { slug: 'producthunt', owner_screen_name: 's_guillorit' }, function (err, data, response) {
  if (err) {
    console.log(err)
    return
  }
  userList = data.users
  parseUserList(userList)
})

import json2csv from 'json2csv'
import fs from 'fs'
// This takes a list of users, and returns an array
function parseUserList (list) {
  let fields = ['id', 'screen_name']
  let csv = json2csv({ data: list, fields: fields })

  fs.writeFile('file.csv', csv, function (err) {
    if (err) throw err
    console.log('file saved')
  })
  // for (let i = 0; i < list.length; i++) {
  //   console.log(list[i].id)
  // }
}
