const baseUrl = '/api/v1';

const routes = (app) => {
  app.get('/', (req, res) => 
  res.status(200).send('Welcome to Random Phone Number Generator!')
)
}

export default routes;
