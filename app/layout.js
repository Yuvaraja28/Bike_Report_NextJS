import './globals.css'

export const metadata = {
  title: 'TVS Star City Plus',
  description: '...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="TVS Honda Star City Plus Bike Report" />
        <meta name="description" content="Created by Yuvaraja.M | Manakula Vinayagar Institute of Technology" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:title" content="TVS Honda Star City Plus Bike Report" />
        <meta property="og:description" content="Created by Yuvaraja.M | Manakula Vinayagar Institute of Technology" />
        <meta property="og:image" content="https://download.logo.wine/logo/TVS_Motor_Company/TVS_Motor_Company-Logo.wine.png" />
        <meta name="theme-color" content="#635985" />
        <link rel="shortcut icon" href="https://download.logo.wine/logo/TVS_Motor_Company/TVS_Motor_Company-Logo.wine.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
