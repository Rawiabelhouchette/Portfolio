import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import Pre from '../components/Pre';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const [load, updateLoad] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            updateLoad(false);
        }, 1200);
    }, []);

    return (
        <html lang="en">
            <body className={inter.className}>
                <Pre load={load} />
                <div className="App" id={load ? 'no-scroll' : 'scroll'}>
                    <NavBar />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
};

export default MainLayout;
