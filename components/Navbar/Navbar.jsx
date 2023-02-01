"use client"

import Link from "next/link";
import cls from "./Navbar.module.css";

import SearchIcon from "@/components/Icons/SearchIcon";
// import CategoryIcon from "@/components/Icons/CategoryIcon";
import PartnershipIcon from "@/components/Icons/PartnershipIcon";
import { usePathname } from 'next/navigation';

const Navbar = () => {

    const pathname = usePathname();
  
    return (
		<nav className={cls.navbar}>
			<ul>
				<li className={pathname === '/' ? 'neo-inset' : 'neo'}>
					<Link href='/'>
						<SearchIcon />
					</Link>
				</li>
				<li className={pathname === '/registr' ? 'neo-inset' : 'neo'}>
					<Link href='/registr'>
						<PartnershipIcon width='26' height='26' />
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
