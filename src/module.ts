import { defineNuxtModule, createResolver, addPlugin } from '@nuxt/kit'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt3-leaflet',
    configKey: 'leaflet',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {},
  setup (_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    addPlugin(resolve('./runtime/leaflet.client'))
  }
})
