import "./globals.css";
import { Nunito, Baloo_2 } from "next/font/google";

// Configure Nunito
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Regular, SemiBold, Bold
  variable: "--font-nunito",
});

// Configure Baloo 2
const baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Baloo 2 supports these weights
  variable: "--font-baloo2",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${baloo2.variable}`}>
     <body className={nunito.className}>
  {children}
</body>

    </html>
  );
}
