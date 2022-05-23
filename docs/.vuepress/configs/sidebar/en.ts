import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: ['/guide/README.md'],
    },
  ],
  '/idea/': [
    {
      text: 'Idea',
      children: ['/idea/README.md'],
    },
  ],
  '/resource/': [
    {
      text: 'Resource',
      children: [
        '/resource/README.md',
        '/resource/utils.md',
        '/resource/c.md',
        '/resource/java.md',
        '/resource/golang.md',
      ],
    },
  ],
  '/note/': [
    {
      text: 'Analysis',
      collapsible: true,
      children: ['/note/analysis/c.md'],
    },
  ],
}
