import React from 'react'
import * as R from 'ramda'

export const renderNotebook = (renderers, notebook) => {
  const mapWithIndex = R.addIndex(R.map)
  const textProp = R.compose(
    R.join(''),
    R.prop('text')
  )
  const language = R.pathOr(
    'python',
    ['metadata', 'language_info', 'name'],
    notebook
  )
  const elementOrDiv = element => (element ? element : 'div')

  const renderMimeBundle = ({ mime, data, metadata }) => {
    switch (mime) {
      case 'image/png':
        return React.createElement(elementOrDiv(renderers.image), {
          key: mime,
          src: `data:image/png;base64,${data}`,
          ...metadata,
        })
      case 'text/plain':
        return React.createElement(elementOrDiv(renderers.text), {
          key: mime,
          children: R.join('', data),
          ...metadata,
        })
      case 'text/html':
        return React.createElement(elementOrDiv(renderers.html), {
          key: mime,
          html: R.join('', data),
          ...metadata,
        })
      case 'application/json':
        return React.createElement(elementOrDiv(renderers.json), {
          key: mime,
          html: R.join('', data),
          ...metadata,
        })
      default:
        return null
    }
  }

  const renderOutput = (output, key) => {
    switch (R.prop('output_type', output)) {
      case 'stream':
        return React.createElement(elementOrDiv(renderers.stream), {
          key,
          children: [textProp(output)],
        })
      case 'display_data':
      case 'execute_result':
      case 'execute_results':
        // the structure under 'data' key is called mime-bundle in the docs
        // const executionCount = R.prop('execution_count', output)
        const functionsToGetDataForEachMimeType = R.compose(
          R.map(mime =>
            R.applySpec({
              mime: R.always(mime),
              data: R.path(['data', mime]),
              metadata: R.pathOr({}, ['metadata', mime]),
            })
          ),
          R.keys,
          R.propOr({}, 'data')
        )(output)
        const displayParts = R.compose(
          R.map(renderMimeBundle),
          R.juxt(functionsToGetDataForEachMimeType) // apply all functions
        )(output)
        return React.createElement(elementOrDiv(renderers.output), {
          key,
          children: displayParts,
        })
      case 'error':
        // handle error
        break
      default:
        return <div key={key} />
    }
  }

  const renderCell = (cell, key) => {
    const source = R.compose(
      R.join(''),
      R.propOr([], 'source')
    )(cell)

    // metadata has collapsed and autoscroll props
    const metadata = R.propOr({}, 'metadata', cell)

    switch (R.prop('cell_type', cell)) {
      case 'markdown':
        return React.createElement(elementOrDiv(renderers.cell), {
          key,
          children: React.createElement(elementOrDiv(renderers.markdown), {
            source,
          }),
          ...metadata,
        })
      case 'code':
        const outputs = R.propOr([], 'outputs', cell)
        return React.createElement(elementOrDiv(renderers.cell), {
          key,
          children: [
            React.createElement(elementOrDiv(renderers.code), {
              language,
              source,
              key: 'code',
            }),
            ...mapWithIndex(renderOutput, outputs),
          ],
          ...metadata,
        })
      case 'raw':
        console.log('Can not render raw cell_type')
        return null
      default:
        return null
    }
  }

  const wrapRenderedCells = cc => {
    return React.createElement(elementOrDiv(renderers.root), {
      children: React.createElement(elementOrDiv(renderers.cells), {
        children: cc,
      }),
    })
  }

  return R.pipe(
    R.propOr([], 'cells'),
    mapWithIndex(renderCell),
    wrapRenderedCells
  )(notebook)
}
