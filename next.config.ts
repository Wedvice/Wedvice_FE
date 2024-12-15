import { NextConfig } from 'next';

const withPWA = require('next-pwa')({
  dest: 'public',
  // disable: process.env.NODE_ENV === "development",
});

const path = require('path');

const nextConfig: NextConfig = withPWA({
  webpack: (config: any) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  reactStrictMode: true,
});

module.exports = nextConfig;
