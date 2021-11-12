import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  storybook: {
    // 追加のアドオンなどあれば
    addons: ['@storybook/addon-controls', '@storybook/addon-notes'],
    // ポート指定
    port: 5555,
    // ストーリーの親に要素など追加しcssなど設定できる
    // decorators: ['<div style="max-width:100px;"><story/></div>'],
    // 背景色や表示位置、デバイスの設定など
    parameters: {
      // 背景色：デフォルトの色を使う場合
      // backgrounds: {
      //   default: 'dark', // light or dark
      // },
      // 背景色：カスタマイズする場合

      backgrounds: {
        default: 'white',
        values: [
          {
            name: 'brown',
            value: '#56371B',
          },
          {
            name: 'light',
            value: '#fff',
          },
          {
            name: 'dark',
            value: '#333',
          },
        ],
      },
      // Description, Default, Controlsカラムの表示
      controls: {
        expanded: true,
      },
      // 表示位置
      layout: 'centered', // centered:中央表示, padded:コンポーネントに余白付与, fullscreen:幅いっぱい
    },
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'workspace',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyBhyxujYfrruPLpLLa4ma57gBlO6tcVQk0',
          authDomain: 'nuxt-example-b038b.firebaseapp.com',
          projectId: 'nuxt-example-b038b',
          storageBucket: 'nuxt-example-b038b.appspot.com',
          messagingSenderId: '905649210872',
          appId: '1:905649210872:web:44dc483ee14dc0cc31820d',
          measurementId: 'G-SSW1ZRFF38',
        },
        services: {
          auth: {
            persistence: 'local', // default
            initialize: {
              // onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
              // onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false,
            },
            ssr: false,
            // emulatorPort: 9099,
            // emulatorHost: 'http://localhost',
          },
          firestore: true,
          storage: true,
        },
      },
    ],
  ],
  pwa: {
    meta: false,
    icon: false,

    workbox: {
      importScripts: ['/firebase-auth-sw.js'],

      dev: true,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

export default config
