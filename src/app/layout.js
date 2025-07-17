import "./globals.css";
import Navbar from "../components/Navbar";
import AOSProvider from "../components/AOSProvider";

export const metadata = {
  title: "Profil Desa Gebang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0B1D26] text-white">
        <Navbar />
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}