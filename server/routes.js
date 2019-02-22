import randomphoneController from "./randomphone.controller";
import path from 'path';

const baseUrl = '/api/v1';

const routes = (app) => {
  app.get(`${baseUrl}`, (req, res) => {
    res.send('Welcome to Random Phone Number Generator'); 
  })

app.get(`${baseUrl}/create-phonenumbers`, randomphoneController.createRandomNumbers.bind(randomphoneController));
app.get(`${baseUrl}/get-phonenumbers`, randomphoneController.getRandomNumbers.bind(randomphoneController));
}

export default routes;
