import randomphoneController from "./randomphone.controller";

const baseUrl = '/api/v1';

const routes = (app) => {
  app.get(`${baseUrl}`, (req, res) => 
  res.status(200).send('Welcome to Random Phone Number Generator!')
)

app.get(`${baseUrl}/create-phonenumbers`, randomphoneController.createRandomNumbers.bind(randomphoneController));
app.get(`${baseUrl}/get-phonenumbers`, randomphoneController.getRandomNumbers.bind(randomphoneController));
}

export default routes;
