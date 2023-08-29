/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    DB_URI: "mongodb://localhost:27017/next13-auth",
    NEXTAUTH_SECRET: "your_nextauth_client_secret_here",

    GOOGLE_CLIENT_ID:"your_google_client_id_here",
    GOOGLE_CLIENT_SECRET: "your_google_client_secret_here",

    GITHUB_ID: "your_github_client_id_here",
    GITHUB_SECRET: "your_github_client_secret_here",

    FACEBOOK_CLIENT_ID: "your_facebook_client_id_here",
    FACEBOOK_CLIENT_SECRET: "your_facebook_client_secret_here",
  },
};

module.exports = nextConfig;
