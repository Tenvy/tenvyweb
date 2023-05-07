/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVICE_ID: process.env.SERVICE_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    USER_PUBLIC_KEY: process.env.USER_PUBLIC_KEY,
  }
}

module.exports = nextConfig
