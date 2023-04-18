import './globals.css'

export const metadata = {
  title: 'Blog AI App',
  description: 'AI Blog app created using nextjs app',
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
