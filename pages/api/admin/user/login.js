import '@/db';
import User from '@/models/User';

export default async (req, res) => {
    if(req.method === 'POST') {
        try {
            // Поиск по email
            const user = await User.findOne({ email: req.body.email });
            if(!user) {
                return res.status(200).json({ status: false, message: 'Email или пароль указаны неверно. Пожалуйста, попробуйте снова.', errors: {} });
            }
            
            // Сравнить пароли
            const comparePassword = await user.comparePassword(req.body.password);
            if(!comparePassword) {
                return res.status(200).json({ status: false, message: 'Email или пароль указаны неверно. Пожалуйста, попробуйте снова.', errors: {} });
            }

            // Сгенерировать токен аутентификации
            const jwt = await user.generateAuthToken();

            res.status(200).json({ status: true, message: 'Авторизовация прошла успешно.', token: jwt });
        } catch (errors) {
            res.status(500).json({ status: false, message: 'Неизвестная ошибка, Пожалуйста, попробуйте позже.', errors });
        }
    } else {
        res.status(500).json({ status: false, message: 'Ошибка запроса' });
    }
}