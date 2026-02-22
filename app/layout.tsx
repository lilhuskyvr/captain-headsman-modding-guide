import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default: 'Captain Headsman — Modding Guide',
    template: '%s | Captain Headsman Modding Guide',
  },
  description: 'Official modding guide for Captain Headsman.',
}

const navbar = <Navbar logo={<b>Captain Headsman — Modding Guide</b>} />
const footer = <Footer>Captain Headsman Modding Guide</Footer>

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/lilhuskyvr/captain-headsman-modding-guide"
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}