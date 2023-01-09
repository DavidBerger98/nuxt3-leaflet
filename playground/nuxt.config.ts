import nuxtLeaflet from '../src/module'
import vue from '@vitejs/plugin-vue'

export default defineNuxtConfig({
  typescript: { strict: true },
  modules: [
    nuxtLeaflet
  ],
  plugins: [
    // vue({
    //   template: {
    //     compilerOptions: {
    //       isCustomElement: (tag) => ['md-linedivider'].includes(tag),
    //     }
    //   }
    // })
  ]
})
