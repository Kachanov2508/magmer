import '@/db';
import User from '@/models/User';

export default async (req, res) => {
    if(req.method === 'POST') {
        const query = { email: req.body.email, token: req.body.token }
        const user = await User.findOneAndUpdate(query, { token: '', status: 'Active' });

        if(user) {
            res.status(200).json({ status: true, message: 'Регистрация прошла успешно', user });
        } else {
            res.status(200).json({ status: false, message: 'Email или токен не действительны' });
        }
    } else {
        res.json({ status: false, message: 'Ошибка запроса' });
    }


}