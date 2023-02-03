import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Spinner from '@/components/admin/Spiner/Spinner';
import { useEffect, useState } from 'react';

const useAuth = () => {
    const [loading, setLoading] = useState();
    const [auth, setAuth] = useState(null);
    
    useEffect(() => {
        const verifyAuth = async () => {

            // Получить токен из localStorage
            const token = localStorage.getItem('token');

            // Если токена нет редирект
            if(!token) {
                setAuth(null);
            }

            // Проверка токена
            try {
                const res = await axios.post('/api/admin/user/verify-auth', { token });
                setAuth(res.data.user);
                setLoading(false);
            } catch (error) {
                setAuth(null);
            }
        }
        verifyAuth();
    }, []);

  return {
    loading,
    auth,
    setUser: setAuth,
  }
}

export default useAuth;