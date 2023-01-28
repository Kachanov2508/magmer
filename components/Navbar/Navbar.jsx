import Link from "next/link";
import classes from "./Navbar.module.css";

const Navbar = () => {
	return (
		<div className={classes.navbar}>
			<div>MyLogo</div>
			<ul>
				<li>
					<Link href="/">Главная</Link>
				</li>
				<li>
					<Link href="/registr">Сотрудничество</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
