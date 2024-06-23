import express from 'express';
import controller from './controller';

const router = express.Router();

router.route("/test").get(controller.testRoute);

export default router;