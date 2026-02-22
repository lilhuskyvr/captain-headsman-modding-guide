import nextra from 'nextra'
import type { NextConfig } from 'next'

const withNextra = nextra({})

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './mdx-components.js'
    }
  }
}

export default withNextra(nextConfig)