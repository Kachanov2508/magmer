"use client";

import "./globals.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Spinner from "@/components/admin/Spiner/Spinner";

export default function RootLayout({ children }) {
	const router = useRouter();
	const [auth, setAuth] = useState(null);

	useEffect(() => {
		const verifyAuth = async () => {
			// Получить токен из localStorage
			const token = localStorage.getItem("token");

			// Если нет токена, редирект
			if (!token) {
				// router.push("/login");
			}

			// Проверка токена
			try {
				const res = await axios.post("/api/admin/user/verify-auth", { token });
				setAuth(res.data.token);
			} catch (error) {
				// router.push("/login");
			}
		};

		verifyAuth();
	}, []);

    console.log(auth);

	if (!auth) {
		return (
			<html>
				<head />
				<body>
					<div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
						<Spinner width="100" height="100" />
					</div>
				</body>
			</html>
		);
	} else {
		return (
			<html>
				<head />
				<body>{children}</body>
			</html>
		);
	}
}
