import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Thoughts & Tips on Parenting",
  description: "Just some tips, tricks, thoughts, and best-practices that have worked for me, or have figured out through trial and error, as I figure out how to raise two girls.",
  assetsDir: 'static',
  ignoreDeadLinks: true,
  lastUpdated: true,
  srcDir: './src',
  outDir: './docs',
  base: '/parenting-notes/',
  srcExclude: ['**/README.md', '**/TODO.md'],
  head: [
    [
      'link',
      { href: 'href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap', rel: 'stylesheet' }
    ]
  ],
  themeConfig: {
    // logo: {
    //   light: '/logo.png',
    //   dark: '/logo-dark.png',
    //   alt: 'Thoughts & Tips on Parenting',
    // },
    siteTitle: 'Parenting Notes',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/introduction.md' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is this site for?', link: '/introduction' }
        ]
      },
      {
        text: 'Early Years',
        items: [
          { text: 'Infant & Baby', link: '/early-years/baby-stuff.md' },
          { text: 'Toddlers', link: '/early-years/toddlers.md' },
        ]
      },
      {
        text: 'Parenting',
        collapsed: true,
        link: '/parenting/parenting.md',
        items: [
          {
            text: 'Parenting',
            link: '/parenting/parenting.md'
          },
          {
            text: 'Two Kids',
            link: '/parenting/two-kids.md'
          },
        ]
      },
      {
        text: 'Daughters',
        collapsed: true,
        items: [
          {
            text: 'Notes for the future', link: '/daughters/future-notes-for-daughters.md'
          },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jessemutz/parenting-notes' },
      { icon: 'instagram', link: 'https://instagram.com/jessemutz'}
    ]
  }
})
