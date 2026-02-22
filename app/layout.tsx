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

const navbar = (
  <Navbar logo={<b>Captain Headsman — Modding Guide</b>}>
    <a href="https://lilhuskyvr.itch.io/captain-headsman" target="_blank" rel="noreferrer" style={{ marginRight: '1rem' }}>
      Game
    </a>
    <a href="https://discord.gg/cSNBqZ9hDp" target="_blank" rel="noreferrer" style={{ marginRight: '1rem' }}>
      Discord
    </a>
    <a href="https://www.patreon.com/lilhuskyvr" target="_blank" rel="noreferrer">
      Patreon
    </a>
  </Navbar>
)
const footer = (
  <Footer>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div>Captain Headsman Modding Guide</div>
      <div style={{ fontSize: '0.875rem' }}>
        <a href="https://lilhuskyvr.itch.io/captain-headsman" style={{ marginRight: '1rem' }}>Game</a>
        <a href="https://discord.gg/cSNBqZ9hDp" style={{ marginRight: '1rem' }}>Discord</a>
        <a href="https://www.patreon.com/lilhuskyvr">Patreon</a>
      </div>
    </div>
  </Footer>
)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/lilhuskyvr/captain-headsman-modding-guide/blob/main"
          feedback={{
            content: 'Question? Give us feedback →',
            link: 'https://github.com/lilhuskyvr/captain-headsman-modding-guide/issues/new',
          }}
          search={{ placeholder: 'Search documentation...' }}
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}