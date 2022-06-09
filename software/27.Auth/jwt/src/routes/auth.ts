import express, { Router } from 'express'
import { signin, signup, profile } from '../controllers/auth.controllers';
import { tokenValidation } from '../libs/verifyToken'

const router: Router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', tokenValidation, profile);

router.get('/health', (req: express.Request, res: express.Response) => {
    res.status(200).json({ msg: "OK" })
})

export default router;
