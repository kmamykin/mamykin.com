// http://devdocs.io/webpack~1/api-in-modules
// http://devdocs.io/webpack~1/code-splitting
export default ({ theme = 'prism' } = {}) =>
  new Promise(resolve => {
    require.ensure([], function(require) {
      // Everything required here will be extracted in a separate chunk
      // named 'prismjs' by webpack
      const Prism = require('prismjs')
      const languageData = require('prismjs/components')
      const languages = Object.keys(languageData.languages).filter(language => language !== 'meta')
      function loadLanguage(language) {
        const langDef = languageData.languages[language]
        if (langDef.require) {
          const deps = Array.isArray(langDef.require) ? langDef.require : [langDef.require]
          // No need to worry about double loading, require is idempotent
          // and will not load the same module twice
          deps.forEach(loadLanguage)
        }
        require(`prismjs/components/prism-${language}`)
      }
      languages.forEach(loadLanguage)
      // require css, webpack must be configured with css loaders for this to work
      require(`prismjs/themes/${theme}.css`)
      resolve(Prism) // resolve promise with a configured instance of Prism
    }, 'prismjs')
  })
