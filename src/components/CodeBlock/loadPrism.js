// http://devdocs.io/webpack~1/api-in-modules
// http://devdocs.io/webpack~1/code-splitting
export default ({ theme = 'prism' } = {}) =>
  new Promise(resolve => {
    require.ensure([], function(require) {
        const Prism = require('prismjs')
        const languageData = require('prismjs/components')
        const languages = Object.keys(languageData.languages).filter(language => language !== 'meta')
        function loadLanguage(language) {
          const langDef = languageData.languages[language]
          if (langDef.require) {
            const deps = Array.isArray(langDef.require) ? langDef.require : [langDef.require]
            deps.forEach(loadLanguage)
          }
          require(`prismjs/components/prism-${language}`)
        }
        languages.forEach(loadLanguage)
        require(`prismjs/themes/${theme}.css`)
        resolve(Prism)
      }, 'prismjs'
    )
  })
