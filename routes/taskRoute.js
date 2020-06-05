import express from 'express';
import TestController from '../controllers/testController';

const router = express.Router();
const testController = new TestController();

router.post('/task', testController.createTest);
router.get('/task/list', testController.listTest);

export default router;