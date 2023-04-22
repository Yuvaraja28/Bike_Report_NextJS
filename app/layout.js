import './globals.css'

export const metadata = {
  title: 'Honda Star City Plus',
  description: '...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="https://download.logo.wine/logo/TVS_Motor_Company/TVS_Motor_Company-Logo.wine.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
