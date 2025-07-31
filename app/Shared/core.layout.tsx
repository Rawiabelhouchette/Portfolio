import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

const CoreLayout = ({ children }: { children: React.ReactNode }) => {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      updateLoad(false);
    }, 1200);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default CoreLayout;
