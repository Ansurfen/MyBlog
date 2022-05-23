import type { NavbarConfig } from '@vuepress/theme-default'

export const en: NavbarConfig = [
  {
    text: 'Guide',
    link: '/guide/',
  },
  {
    text: 'Idea',
    link: '/idea/',
  },
  {
    text: 'Resource',
    link: '/resource/',
  },
  {
    text: 'Note',
    children: [
      {
        text: 'Analysis',
        children: ['/note/analysis/c.md'],
      },
    ],
  },
  {
    text: 'Git',
    children: [
      {
        text: 'Gitee',
        link: 'https://gitee.com/ansurfen',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/Ansurfen',
      },
      {
        text: 'GitLab',
        link: 'https://gitlab.com/Ansurfen',
      },
    ],
  },
]
