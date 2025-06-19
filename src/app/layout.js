import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Profil Desa Gebang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}