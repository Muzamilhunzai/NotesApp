import express from 'express';
import { handeldelet } from '../controllers/handeldelet.js';
import { handeladd } from '../controllers/handeladd.js';
import {getAllNotes} from '../controllers/getnotes.js';

const router = express.Router();

router.post('/add', handeladd);
router.delete('/delete/:id', handeldelet);
router.get('/getAllNotes', getAllNotes);

export default router;