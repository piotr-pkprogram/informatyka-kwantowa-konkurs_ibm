module.exports = {
    plugins: [
        require('postcss-uncss')({
            html: [
                './index.html',
            ]
        }),
        require('tailwindcss'),
        require('autoprefixer'),
        require('postcss')
    ]
}