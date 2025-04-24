// app/layout.tsx
import 'nextra-theme-docs/style.css'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { ReactNode } from 'react'

// Optional metadata export (Next.js App Router)
export const metadata = {
  title: 'Project UI',
  description: 'Stylish NextGen UI',
  // Add any other metadata fields you want
}

// Define banner, navbar, footer components
const banner = <Banner storageKey="nextra-banner">Nextra 4.0 is released 🎉</Banner>

const navbar = (
  <Navbar
    logo={<b>Project UI</b>}
    // Add more navbar config if needed
  />
)

const footer = <Footer>MIT {new Date().getFullYear()} © ProjectUI Gajendra Kumar.</Footer>

// Props typing for layout
interface RootLayoutProps {
  children: ReactNode
}

// Default RootLayout
export default async function RootLayout({ children }: RootLayoutProps) {
  const pageMap = await getPageMap()

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        {/* Custom head elements go here if needed */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          footer={footer}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
