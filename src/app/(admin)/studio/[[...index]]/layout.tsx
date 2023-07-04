import { ToasterProvider } from '@/app/providers/toaster-provider'
import React from 'react'
import "src/app/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<html>
			<head />
			<body>
			<ToasterProvider />
        
        {children}</body>
		</html>
	)
}
