export default {
  titleTemplate: '%s - Next.js', //전역적으로 지정하고싶을 때
  openGraph: {
    type: 'website',
    site_name: 'Next.js 시작하기',
    images: [
      { url: 'https://nextjs.org/static/blog/next-13/twitter-card.png' },
    ],
  },
  additionalLinkTags: [
    {
      rel: 'shortcut icon',
      href: './public/favicon.ico',
    },
  ],
};
