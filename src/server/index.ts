import express from 'express';

import routes from './routes/route';

const app = express();

const urlEncodedConfig: any = {
  extended: false
}

// Middleware setup
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded(urlEncodedConfig));

app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));