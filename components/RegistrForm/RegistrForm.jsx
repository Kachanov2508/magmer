"use client";

import { useState } from "react";
import Link from "next/link";

import classes from "./RegistrForm.module.css";
import axios from "axios";
import Logo from "@/components/Logo/Logo";

const RegistrForm = () => {
	const [company, setCompany] = useState("");
	const [site, setSite] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [response, setResponse] = useState({});
	const [errors, setErrors] = useState({});
	const [disabledBtn, setDisabledBtn] = useState(false);

	const submitHandler = async (e) => {
		e.preventDefault();

		setDisabledBtn(true);

		if (password != confirmPassword) {
			setErrors({ password: { message: "Пароли не совпадают" } });
			return;
		} else {
			setErrors({});
		}

		const response = await axios.post("/api/admin/user/create", {
			company,
			site,
			email,
			phone,
			password,
		});

		setErrors(response.data.errors);
		setResponse(response.data);

		if (response.data.status) {
			setCompany("");
			setSite("");
			setEmail("");
			setPhone("");
			setPassword("");
			setConfirmPassword("");
		}

		setDisabledBtn(false);
	};

	return (
		<div className={`${classes.container} neomorphism`}>
			<div className={classes.logoContainer}>
				<Logo />
			</div>

			{response.status && (
				<div className={classes.succes}>
					<p>{response.message}</p>
				</div>
			)}

			<form className={classes.form} onSubmit={(e) => submitHandler(e)}>
				<div>
					<input className={`${errors.company && classes.error} input neomorphismInset`} type="text" name="company" placeholder="Название компании" value={company} onChange={(e) => setCompany(e.target.value)} autoComplete="off" />
					{errors.company && <p>{errors.company.message}</p>}
				</div>

				<div>
					<input className={`${errors.site && classes.error} input neomorphismInset`} type="text" name="site" placeholder="Сайт компании" value={site} onChange={(e) => setSite(e.target.value)} autoComplete="off" />
					{errors.site && <p>{errors.site.message}</p>}
				</div>

				<div>
					<input className={`${errors.email && classes.error} input neomorphismInset`} type="text" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" />
					{errors.email && <p>{errors.email.message}</p>}
				</div>

				<div>
					<input className={`${errors.phone && classes.error} input neomorphismInset`} type="text" name="phone" placeholder="Телефон" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="off" />
					{errors.phone && <p>{errors.phone.message}</p>}
				</div>

				<div>
					<input className={`${errors.password && classes.error} input neomorphismInset`} type="password" name="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
					{errors.password && <p>{errors.password.message}</p>}
				</div>

				<div>
					<input className={`${errors.password && classes.error} input neomorphismInset`} type="password" name="confirm_password" placeholder="Подтвердите пароль" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
					{errors.password && <p>{errors.password.message}</p>}
				</div>

				<button className="btn neomorphism" type="submit" disabled={disabledBtn ? true : false}>
					Регистрация
				</button>
			</form>
			
			<div className={classes.auth}>
				<Link href="/login">Уже есть аккаунт?</Link>
			</div>
		</div>
	);
};

export default RegistrForm;
