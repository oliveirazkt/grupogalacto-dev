import '../assets/css/style.css'

export default function RootLayout({ children }) {
    return (
      <html lang="pt-br">
            <body>
                
                {children}
                
            </body>
      </html>
    )
  }