import { Router } from 'express';
import { EnchancerController } from '../controllers/enchancer.controller';

export const apiRouter = Router();

apiRouter.get('/enchancer', async (req, res) => {
    await EnchancerController.enchanceImages();
    res.json({ success: true } );
});
