import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: '指南',
    link: '/zh/guide/',
  },
  {
    text: '想法',
    link: '/zh/idea/',
  },
  {
    text: '资源',
    link: '/zh/resource/',
  },
  {
    text: '笔记',
    children: [
      {
        text: '深刨向',
        children: ['/zh/note/analysis/c.md'],
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
