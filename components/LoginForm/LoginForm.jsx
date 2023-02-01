"use client";

import { useRouter } from 'next/navigation';
import { useState } from "react";
import Link from "next/link";
import axios from "axios";

import classes from "./LoginForm.module.css";
import Logo from "@/components/Logo/Logo";
import Spinner from '../Spiner/Spinner';

const LoginForm = () => {
	const router = useRouter()
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState({});
	const [response, setResponse] = useState({});
	const [disabledBtn, setDisabledBtn] = useState(false);

	const submitHandler = async (e) => {
		e.preventDefault();

		if(!email) {
			setErrors({ email: 'Укажите email' });
			setResponse({});
			return
		}
		
		if(!password) {
			setErrors({ password: 'Укажите пароль' })
			setResponse({});
			return
		}

		setDisabledBtn(true);

		const response = await axios.post("/api/admin/user/login", { email, password });
		setResponse(response.data);

		if(response.data.status) {
			localStorage.setItem('tiken', response.data.token);
			router.push('/admin');
		} else {
			setErrors({});
		}

		setDisabledBtn(false);

	};

	return (
		<div className={classes.container + ' neo'}>
			
			<div className={classes.logoContainer}>
				<Logo />
			</div>

			{response.errors && (
				<div className={classes.error}>
					<p>{response.message}</p>
				</div>
			)}

			<form className={classes.form} onSubmit={(e) => submitHandler(e)}>
				<div>
					<input 
						className={`${errors.email && classes.inputError} input neo-inset`} 
						type="text" 
						name="email" 
						autoComplete="off" 
						placeholder="Email" 
						value={email} 
						onChange={(e) => setEmail(e.target.value)} 
					/>
					{ errors.email && <p>Укажите email</p> }
				</div>

				<div>
					<input 
						className={`${errors.password && classes.inputError} input neo-inset`} 
						type="password" 
						name="password" 
						placeholder="Пароль" 
						value={password} 
						onChange={(e) => setPassword(e.target.value)} 
					/>
					{ errors.password && <p>Укажите пароль</p> }
				</div>

				{!disabledBtn ? (
					<button className="btn" type="submit">
						Войти
					</button>
				) : (
					<button className="btn" type="submit" disabled>
						<Spinner />
					</button>
				)}
				
			</form>
			
			<div className={classes.link}>
				<Link href="/login">Забыли пароль?</Link>
			</div>
		</div>
	);
};

export default LoginForm;
