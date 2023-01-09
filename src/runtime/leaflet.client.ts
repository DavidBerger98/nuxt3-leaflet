import * as VueLeaflet from '@vue-leaflet/vue-leaflet'
// import L from 'leaflet'

export default defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.component('l-circle', VueLeaflet.LCircle)
  nuxtApp.vueApp.component('l-circle-marker', VueLeaflet.LCircleMarker)
  nuxtApp.vueApp.component('l-control', VueLeaflet.LControl)
  nuxtApp.vueApp.component('l-control-attribution', VueLeaflet.LControlAttribution)
  nuxtApp.vueApp.component('l-control-layers', VueLeaflet.LControlLayers)
  nuxtApp.vueApp.component('l-control-scale', VueLeaflet.LControlScale)
  nuxtApp.vueApp.component('l-control-zoom', VueLeaflet.LControlZoom)
  nuxtApp.vueApp.component('l-feature-group', VueLeaflet.LFeatureGroup)
  nuxtApp.vueApp.component('l-geo-json', VueLeaflet.LGeoJson)
  nuxtApp.vueApp.component('l-grid-layer', VueLeaflet.LGridLayer)
  nuxtApp.vueApp.component('l-icon', VueLeaflet.LIcon)
  nuxtApp.vueApp.component('l-image-overlay', VueLeaflet.LImageOverlay)
  nuxtApp.vueApp.component('l-layer-group', VueLeaflet.LLayerGroup)
  nuxtApp.vueApp.component('l-map', VueLeaflet.LMap)
  nuxtApp.vueApp.component('l-marker', VueLeaflet.LMarker)
  nuxtApp.vueApp.component('l-polygon', VueLeaflet.LPolygon)
  nuxtApp.vueApp.component('l-polyline', VueLeaflet.LPolyline)
  nuxtApp.vueApp.component('l-popup', VueLeaflet.LPopup)
  nuxtApp.vueApp.component('l-rectangle', VueLeaflet.LRectangle)
  nuxtApp.vueApp.component('l-tile-layer', VueLeaflet.LTileLayer)
  nuxtApp.vueApp.component('l-tooltip', VueLeaflet.LTooltip)
  nuxtApp.vueApp.component('l-lwms-tile-layer', VueLeaflet.LWmsTileLayer)
  
  const L = await import('leaflet')

  // Build icon assets.
  // delete L.Icon.Default.prototype._getIconUrl
  // L.Icon.Default.imagePath = ''
  // L.Icon.Default.mergeOptions({
  //   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  //   iconUrl: require('leaflet/dist/images/marker-icon.png'),
  //   shadowUrl: require('leaflet/dist/images/marker-shadow.png')
  // })
  
  const LeafletPlugin = {
    install(app, options = {}, router) {
      return {
        provide: { L }
      }
    }
  }
  
  nuxtApp.vueApp.use(LeafletPlugin)
})

