import User from '@/models/User'
import jwt from "jsonwebtoken";


export default async (req, res) => {
    if(req.method === 'POST') {
        try {
            const token = jwt.verify(req.body.token, process.env.JWT_SECRET);
            res.status(200).json({ status: true, message: 'Аутентификация прошла успешно', token });
        } catch (error) {
            res.status(200).json({ status: false, message: 'Ошибка аутентификации', error });
        }
    }
}

