// https://facebook.github.io/create-react-app/docs/code-splitting
// http://2ality.com/2017/01/import-operator.html#loading-code-on-demand

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
require(`prismjs/themes/prism.css`)
// require(`prismjs/themes/prism-coy.css`)
// require(`prismjs/themes/prism-dark.css`)
// require(`prismjs/themes/prism-funky.css`)
// require(`prismjs/themes/prism-okaidia.css`)
// require(`prismjs/themes/prism-solarizedlight.css`)
// require(`prismjs/themes/prism-tomorrow.css`)
// require(`prismjs/themes/prism-twilight.css`)

// exports will be available as the result of the promise after import('prismjs')
// resolve it with a configured instance of Prism
export { Prism }
