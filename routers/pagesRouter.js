import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send({ data: 'Welcome to PackUp :)'});
});

/*
Mangler:

GET /login
GET /register
GET /about
*/

export default router;