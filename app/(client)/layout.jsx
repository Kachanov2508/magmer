import "./globals.css";
import Navbar from "@/components/client/Navbar/Navbar";

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
