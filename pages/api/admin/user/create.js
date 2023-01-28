import '@/db';
import User from '@/models/User';
import email from '@/utils/email';
import { confirmEmail as confirm } from '@/utils/emails/bodyEmail';

const confirmEmail = (to, token) => {
    const subject = 'Подтверждение email на сайте MAGMER';
    const body = confirm(to, token)
    email(to, subject, body);
}

export default async (req, res) => {
    if(req.method === 'POST') {
        try {
            const { company, site, email, phone, password } = req.body;
            const user = await User.create({ company, site, email, phone, password });

            confirmEmail(user.email, user.token);
    
            res.status(201).send({ status: true, message: 'Аккаунт создан. На указанный адрес отправлено письмо с подтверждением', errors: {}, });
        } catch (error) {
            if(error.code === 11000) {
                res.status(200).send({ status: false, message: 'Ошибка при регистрации', errors: {email: {message: 'Email уже зарегистрирован'}}, });
                return;
            }
            res.status(200).send({ status: false, message: 'Ошибка при регистрации', errors: error.errors  });
        }
    } else {
        res.status(500).send({ message: 'Ошибка запроса' });
    }
};