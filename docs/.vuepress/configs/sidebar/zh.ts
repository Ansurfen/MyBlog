import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '指南',
      children: ['/zh/guide/README.md'],
    },
  ],
  '/zh/idea/': [
    {
      text: '想法',
      children: ['/zh/idea/README.md', '/zh/idea/goscli.md'],
    },
  ],
  '/zh/resource/': [
    {
      text: '资源',
      children: [
        '/zh/resource/README.md',
        '/zh/resource/utils.md',
        '/zh/resource/dsa.md',
        '/zh/resource/sql.md',
        '/zh/resource/c.md',
        '/zh/resource/java.md',
        '/zh/resource/golang.md',
        '/zh/resource/python.md',
        '/zh/resource/front.md',
        '/zh/resource/flutter.md',
        '/zh/resource/minecraft.md',
        '/zh/resource/advance.md',
        '/zh/resource/net.md',
        '/zh/resource/os.md',
        '/zh/resource/new.md',
      ],
    },
  ],
  '/zh/note/': [
    {
      text: '深刨向',
      collapsible: true,
      children: ['/zh/note/analysis/c.md'],
    },
  ],
}
