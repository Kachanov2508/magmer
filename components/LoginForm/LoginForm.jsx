"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";

import classes from "./LoginForm.module.css";
import Logo from "@/components/Logo/Logo";

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState({});
	const [response, setResponse] = useState({});
	const [disabledBtn, setDisabledBtn] = useState(false);

	const submitHandler = async (e) => {
		e.preventDefault();

		if(!email) {
			setErrors({ email: 'Укажите email' })
			return
		}
		
		if(!password) {
			setErrors({ password: 'Укажите пароль' })
			return
		}

		
		setDisabledBtn(true);

		const response = await axios.post("/api/admin/user/login", { email, password });
		setResponse(response.data);

		if(!response.data.status) {
			setErrors({});
		}

		setDisabledBtn(false);

	};

	return (
		<div className={`${classes.container} neomorphism`}>
			<div className={classes.logoContainer}>
				<Logo />
			</div>

			{
				response.errors && (
					<div className={classes.error}>
						<p>{response.message}</p>
					</div>
				)
			}

			<form className={classes.form} onSubmit={(e) => submitHandler(e)}>
				<div>
					<input className={`${errors.email && classes.inputError} input neomorphismInset`} type="text" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" />
					{ errors.email && <p>Укажите email</p> }
				</div>

				<div>
					<input className={`${errors.password && classes.inputError} input neomorphismInset`} type="password" name="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
					{ errors.password && <p>Укажите пароль</p> }
				</div>

				<button className="btn neomorphism" type="submit" disabled={disabledBtn ? true : false}>Войти</button>
			</form>
			
			<div className={classes.restore}>
				<Link href="/login">Забыли пароль?</Link>
			</div>
		</div>
	);
};

export default LoginForm;
