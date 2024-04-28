import { defineConfig } from 'vitepress'

export const it = defineConfig({
  lang: 'it-IT',
  themeConfig: {
    nav: [
      { text: 'Test Nota Root', link: 'notes/root.md' }
    ]
  }
})
