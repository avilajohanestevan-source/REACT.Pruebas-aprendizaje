import { Router } from 'express';
import server from './server';

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World on Express');
});

//router.get('/ecommerce', (req, res) => {
//    res.send('ADSO ecommerce');
//});

//router.get('/blog', (req, res) => {
//    res.send('ADSO blog page');
//});

router.post('/auth/register', (req, res) => {
    res.send('ADSO register page');
    console.log('desde register');
    console.log(req.body);
});


export default router;