"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

import Counter from "@/components/client/Counter/Counter";
import Salute from "@/components/client/Salute/Salute";
import classes from "./page.module.css";



const ConfitmEmailPage = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [status, setStatus] = useState();
	const [isClient, setIsClient] = useState();

	const redirect = (time, path) => {
		setTimeout(() => {
			router.push(`/${path}`);
		}, time);
	}

	useEffect(() => {
		// Предотвращает выполнение useEffect дважды
		setIsClient(true)
		if(isClient) {
			const checkEmailAndToken = async () => {
				const email = searchParams.get("email");
				const token = searchParams.get("token");
				const response = await axios.post("/api/admin/user/confirm", { email, token });
				
				if (response.data.status) {
					setStatus('Success');
					redirect(31000, 'login');
				} else {
					setStatus('Fail');
					redirect(31000, 'registr');
				}
			};
			checkEmailAndToken();
		}
	}, [isClient]);

	return (
		<>
			{
				status === 'Success' ? (
					<>
						<div className={classes.content}>
							<h1>Поздравляем!</h1>
							<h2>Ваша регистрация прошла успешно!</h2>
							<h3>Мы рады, что вы с нами и ждем ваших дальнейших успехов в организации мероприятий.</h3>
							<h4>Перенаправление на страницу авторизации через: <Counter time={30} /> сек.</h4>
						</div>
						<Salute />
					</>
				) : null
			}

			{
				status === 'Fail' ? (
					<>
						<div className={classes.content}>
							<h1>К сожалению, мы не можем подтвердить регистрацию по данной ссылке.</h1>
							<h2>Возможно, что вы уже подтвердили свой email или ссылка указана не верно.</h2>
							<h4>Перенаправление на страницу регистрации через: <Counter time={30} /> сек.</h4>
						</div>
					</>
				) : null
			}
		</>
	);
};

export default ConfitmEmailPage;
