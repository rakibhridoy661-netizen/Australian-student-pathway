import './globals.css'

export const metadata = {
  title: 'Aussie Student Pathway',
  description: 'Student Consultancy Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
