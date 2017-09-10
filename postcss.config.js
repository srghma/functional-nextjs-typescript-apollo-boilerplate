module.exports = {
  plugins: [
    require('postcss-easy-import')({prefix: '_'}), // keep this first)({prefix: class="pl-c1">require('postcss-easy-import')({prefix: '_'}), // keep this first
    require('autoprefixer')({ /* ...options */ }) // so imports are auto-prefixed too
  ]
}
