import Express from 'express';
import { createAirplane } from '../../controllers/airplaneController.js';

const airplaneRouter = Express.Router();

airplaneRouter.post('/', createAirplane)

export default airplaneRouter;