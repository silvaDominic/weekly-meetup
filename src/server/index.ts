import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();

// Middleware setup
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

// Routes
app.use(routes);
// Fallback to client side routing
app.use('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));