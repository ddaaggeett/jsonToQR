var fs = require('fs')
var path = require('path')
var QRCode = require('qrcode')

const getFileName = (file) => {
    var name = file
    var cut = name.indexOf('.json')
    if(cut != -1) {
        name = name.substring(0, cut)
    }
    return name
}

const runAllFiles = () => {
    fs.readdirSync('./json/').forEach(file => {
        if(file.includes('.json')) {
            const jsonString = fs.readFileSync(path.join('json',file)).toString()
            const fileName = getFileName(file)
            const outQRFile = fileName.concat('.png')
            const outFilePath = path.join('codes', outQRFile)
            QRCode.toFile(outFilePath, jsonString, (err) => {
                if (err) throw err
                console.log('new QR file @ ' + outFilePath)
            })
        }
    })
}

const runSingleFile = (name) => {
    const outQRFile = name.concat('.png')
    const jsonFile = name.concat('.json')
    const jsonString = fs.readFileSync(path.join('json',jsonFile)).toString()
    const outFilePath = path.join('codes', outQRFile)
    QRCode.toFile(outFilePath, jsonString, (err) => {
        if (err) throw err
        console.log('\nnew QR file @ ' + outFilePath)
    })
}

if(process.argv[2] == null) runAllFiles()
else runSingleFile(process.argv[2])
