import "./globals.css";
import { Nunito } from 'next/font/google'

// Configure Nunito
const nunito = Nunito({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Regular, SemiBold, Bold
  variable: '--font-nunito',
})

// Configure Baloo 2

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={`${nunito.variable}`}>
      <body className="font-nunito"
      >
        {children}
      </body>
    </html>
  );
}
