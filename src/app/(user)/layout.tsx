import '../globals.css'

export const metadata = {
  title: 'José Juan Téllez Guzmán',
  description: "Joss's Portafolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
