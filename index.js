var fs = require('fs')
var path = require('path')
var QRCode = require('qrcode')

const name = process.argv[2]
const outQRFile = name.concat('.png')
const jsonFile = name.concat('.json')
const jsonString = fs.readFileSync(path.join('json',jsonFile)).toString()
const outFilePath = path.join('codes', outQRFile)

QRCode.toFile(outFilePath, jsonString, (err) => {
    if (err) throw err
    console.log('\nnew QR file @ ' + outFilePath + '\n')
})
