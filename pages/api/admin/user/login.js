import '@/db';
import User from '@/models/User';
export default async (req, res) => {
    if(req.method === 'POST') {
        try {
            const { email, password } = req.body;
            const token = await User.login(email, password);
            res.setHeader('')

            res.status(200).json({ status: true, message: 'Авторизовация прошла успешно.', token });
        } catch (error) {
            console.log(error);
            res.status(200).json({ status: false, message: error.message });
        }
    } else {
        res.status(500).json({ status: false, message: 'Ошибка запроса' });
    }
}