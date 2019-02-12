import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

import routes from './server/routes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
routes(app);

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.static('server/'));

export default app;
