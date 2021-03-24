module.exports = {
    parser: 'postcss-scss',
    syntax: 'postcss-scss',
    plugins: {
        "postcss-fontpath": { checkFiles: true, ie8Fix: true },
        tailwindcss: "tailwind.config.js",
        autoprefixer: {
            browsers: ['last 3 versions']
        }
    }

}