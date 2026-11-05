import { Router } from 'express';

const router = Router();


router.get('/events', (req, res) =>{
    res.send({ data: 'Overview of events created by dogowners'});
});

/*
Mangler:

GET /events/:id
POST /events
PATCH /events/:id
DELETE /events/:id
*/

export default router;