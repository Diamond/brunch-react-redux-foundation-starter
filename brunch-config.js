module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  },
  plugins: {
    babel: {presets: ['es2015', 'react']},
    sass: {
      options: {
        includePaths: [
          'node_modules/foundation-sites/scss',
          'node_modules/motion-ui/src'
        ]
      }
    }
  },
  npm: {
    globals: {
      $: 'jquery',
      jQuery: 'jquery'
    }
  }
};
