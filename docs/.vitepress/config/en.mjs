import { defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  themeConfig: {
    nav: [
      { text: 'Test Root Note', link: 'notes/making/3d/fdm/printers/voron-printers' }
    ]
  }
})
