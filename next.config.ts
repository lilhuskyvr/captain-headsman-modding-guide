import nextra from 'nextra'
import type { NextConfig } from 'next'

const withNextra = nextra({})

const nextConfig: NextConfig = {
  // your existing Next config options here
}

export default withNextra(nextConfig)