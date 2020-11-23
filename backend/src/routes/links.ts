import {Router} from 'express';
import LinksRouter from '../controllers/links';

const router = Router();

router.post('/links', LinksRouter.postLink);

router.get('/links/:code', LinksRouter.hitLink);

router.get('/links/:code/stats', LinksRouter.getLink);

export default router;