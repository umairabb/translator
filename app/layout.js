import './globals.css'

export const metadata = {
  title: 'Languages-Translator',
  description: 'Language converted to otherr languages',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-slate-200 mx-auto'>{children}</body>
    </html>
  )
}
