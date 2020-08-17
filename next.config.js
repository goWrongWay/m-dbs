// next.config.js
const withCSS = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const withFonts = require('next-fonts')
module.exports = withFonts(
    withCSS(
        withLess({
            /* config options here */
            cssModules: true,
        })
    )
)
