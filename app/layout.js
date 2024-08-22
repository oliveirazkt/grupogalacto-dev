import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

import '../assets/css/style.css'

export default function RootLayout({ children }) {
    return (
      <html lang="pt-br">
            <body className={poppins.variable}>
                
                {children}
                
            </body>
      </html>
    )
  }