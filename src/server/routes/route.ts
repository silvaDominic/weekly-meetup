import * as express from 'express';

const router = express.Router();

router.get('/home', (req, res, next) => {
  res.json('Wired up.');
});

export default router;