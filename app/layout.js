import { Bangers } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Trump vs Biden",
  description: "Vote for Trump or Biden",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bangers.className}>
        {children} <ToastContainer />
      </body>
    </html>
  );
}
