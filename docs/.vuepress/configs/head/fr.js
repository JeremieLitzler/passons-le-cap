const titleFr = 'Un journal partagé de Jérémie Litzler';
const descriptionFr =
  'Je partage ici mes notes et experiences que je suis sûr seont utiles pour au moins une personne.';
export const frHeadConfig = {
  lang: 'fr-FR',
  title: titleFr,
  description: descriptionFr,
  head: [
    ['meta', { property: 'og:title', content: titleFr }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://iamjeremie.me/' }],
    [
      'meta',
      {
        property: 'og:description',
        content: descriptionFr,
      },
    ],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: 'image.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#18a558' }],
    ['meta', { name: 'theme-color', content: '#18a558' }],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/favicon-16x16.png',
      },
    ],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#18a558',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/icons/apple-touch-icon.png',
      },
    ],
    ['link', { rel: 'manifest', href: '/site.fr.webmanifest' }],
  ],
};
