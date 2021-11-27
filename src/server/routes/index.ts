import express from 'express';
import apiRouter from './api';
import authRouter from './auth';

const router = express.Router();

router.use('/api', apiRouter);
router.use('/auth', authRouter);

export default router;