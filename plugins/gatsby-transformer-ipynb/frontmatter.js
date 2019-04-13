const R = require('ramda')

function getFrontmatter(notebook) {
  return R.pipe(
    R.propOr({}, 'metadata'),
    R.applySpec({
      permalink: R.prop('permalink'),
      title: R.prop('title'),
      author: R.prop('author'),
      date: R.prop('date'),
      tags: R.propOr([''], 'tags'),
      draft: R.propOr(false, 'draft'),
    }),
    R.pickBy((v, k) => !R.isNil(v))
  )(notebook)
}

module.exports = {
  getFrontmatter,
}
