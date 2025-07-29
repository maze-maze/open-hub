import Header from '~/components/common/header/header'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-dvh overflow-hidden">
      <Header />
      {children}
    </div>
  )
}
