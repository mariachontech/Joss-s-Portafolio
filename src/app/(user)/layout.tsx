import '../globals.css'
import { ToasterProvider } from '../providers/toaster-provider'

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
			<body>
				<ToasterProvider />

				{children}
			</body>
		</html>
	)
}
