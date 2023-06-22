/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStringMode: false,
  images: {
    domains: ['lecture-1.vercel.app', 'search.pstatic.net'],
  },
  //국제화 관련 속성
  i18n: {
    /** https://nextjs.org/docs/advanced-features/i18n-routing#getting-started */
    locales: ['ko'],
    defaultLocale: 'ko',
  },
};

module.exports = nextConfig;
