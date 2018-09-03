var fs = require('fs')
var path = require('path')
var QRCode = require('qrcode')

const outQRFile = process.argv[3]
const jsonFile = process.argv[2]
const jsonString = fs.readFileSync('json/' + jsonFile).toString()

const outFilePath = path.join('codes', outQRFile)

QRCode.toFile(outFilePath, jsonString, (err) => {
    if (err) throw err
    console.log('\nnew QR file @ ' + outFilePath + '\n')
})
