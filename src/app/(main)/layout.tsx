import Header from '~/components/layout/header/header'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      {children}
    </div>
  )
}
