import { defineConfig } from 'vitepress'
import { shared } from './shared.mjs'
import { en } from './en.mjs'
import { it } from './it.mjs'

export default defineConfig({
  ...shared,
  locales: {
    it: { label: 'Italiano', ...it },
    root: { label: 'English', ...en }
  }
})
