/**
* Takes a list of Twitter users and converts them into a CSV, which it then writes to the /csv directory.
* @param {Array} list A list of Twitter users.
*/

import json2csv from 'json2csv'
import fs from 'fs'

function createCSV (list, listName, listOwner) {
  let fields = ['id', 'screen_name']
  let csv = json2csv({ data: list, fields: fields })
  fs.writeFile('./csv/' + listName + '_' + listOwner + '.csv', csv, function (err) {
    if (err) throw err
    console.log('File saved! 🐥')
  })
}

export default createCSV
