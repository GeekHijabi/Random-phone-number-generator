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
      message: 'Numbers successfully generated'
    });
  },

  getRandomNumbers(req, res) {
    const filePath = path.join(__dirname, '/randomphone.json');
    let file = readFileSync(filePath,'utf8');
    if (file.length <= 0) {
      return res.status(404).json({
        message: 'No phone numbers found'
      })
    }
    file = JSON.parse(file)
    return res.status(200)
    .json({
      message: 'Numbers fetched successfully',
      numbers: file,
      length: file.length
    });
  }


}
