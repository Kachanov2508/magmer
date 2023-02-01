import "./globals.css";
import '@/public/globals.css';
import Navbar from "@/components/Navbar/Navbar";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head />
			<body className='bg-zinc-200 text-zinc-500'>
			    <Navbar />
                {children}
            </body>
		</html>
	);
}
