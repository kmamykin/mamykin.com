const R = require('ramda')

function getFrontmatter(notebook) {
  return R.pipe(
    R.propOr({}, 'metadata'),
    R.applySpec({
      permalink: R.prop('permalink'),
      title: R.prop('title'),
      date: R.prop('date'),
      author: R.prop('author'),
      categories: R.propOr([''], 'categories'),
      tags: R.propOr([''], 'tags'),
      published: R.propOr(true, 'published'),
    }),
    R.pickBy((v, k) => !R.isNil(v))
  )(notebook)
}

module.exports = {
  getFrontmatter,
}
