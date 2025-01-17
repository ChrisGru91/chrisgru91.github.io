import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const config: GatsbyConfig = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.mjs
    siteTitle: `msklepy.net`,
    siteTitleAlt: `msklepy.net - strona o funkcjach magento`,
    siteHeadline: `msklepy.net - strona poświęcona magento`,
    siteUrl: `https://msklepy.net`,
    siteDescription: `Strona opisuje funkcjonalności oferowane przez system Magento`,
    siteImage: `/banner.jpg`,
    siteLanguage: `pl`,
    author: `ChrisGru91`,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-smoothscroll`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `msklepy.net - funkcje magento`,
        short_name: `msklepy.net`,
        description: `Strona opisuje funkcjonalności oferowane przez system Magento`,
        start_url: `/`,
        background_color: `#141821`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
