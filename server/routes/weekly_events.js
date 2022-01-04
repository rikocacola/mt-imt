import express from 'express';

import { getWeeklyEvents, setWeeklyEvents } from '../controllers/weekly_events.js';

const router = express.Router();

router.get('/', getWeeklyEvents);
router.post('/', setWeeklyEvents);

export default router;
