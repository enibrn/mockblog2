import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  title: "mockblog",
  base: '/mockblog/',
  description: "mock + blog = mockblog",
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AndreaBinelli/mockblog' }
    ]
  }
})