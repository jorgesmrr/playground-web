const purgecss = require('@fullhuman/postcss-purgecss')({

    content: [
        './dist/**/*.html',
    ],

    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
    ]
}