import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

export default {
  createRandomNumbers(req, res) {
    const filePath = path.join(__dirname, '/randomphone.json');
    let file = readFileSync(filePath, 'utf8');
    if (file.length === 0) {
      file = [];
    } else {
      file = JSON.parse(file)
    }

    let phoneNumber;
    for (let i = 0; i < 20; i++) {
      const x = (Math.random().toString().slice(2, 11));
      phoneNumber = '0'.concat(x);
      file.push(phoneNumber)
    }
    let phoneNumbers =  JSON.stringify(file);
    writeFileSync(filePath, phoneNumbers, 'utf-8');
    return res.status(201).json({
      message: '20 Phone numbers successfully generated',
      numbers: JSON.parse(phoneNumbers),
      numbersLength: JSON.parse(phoneNumbers).length,
      maxNum: this.getMaxorMinNum(Math.max(...file)),
      minNum: this.getMaxorMinNum(Math.min(...file))
    });
  },

  getMaxorMinNum(file) {
    const numberToGet = file.toString();
    const numberToGetLength = numberToGet.length;
    if(numberToGet.length < 10) {
      const diff = 10 - numberToGetLength;
      const replaceNum = '0'.repeat(diff);
      return replaceNum.concat(numberToGet);
    }
    return numberToGet;
  },

  getRandomNumbers(req, res) {
    const filePath = path.join(__dirname, '/randomphone.json');
    let file = readFileSync(filePath,'utf8');
    if (file.length <= 0) {
      return res.status(404).json({
        message: 'No phone numbers generated yet'
      })
    }
    file = JSON.parse(file);
    return res.status(200)
    .json({
      message: 'All Phone numbers fetched successfully',
      numbers: file,
      length: file.length,
      maxNum: this.getMaxorMinNum(Math.max(...file)),
      minNum: this.getMaxorMinNum(Math.min(...file))
    });
  },

}
