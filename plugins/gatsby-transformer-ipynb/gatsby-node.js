const crypto = require('crypto')

exports.onCreateNode = async ({
  boundActionCreators: { createNode, createParentChildLink },
  loadNodeContent,
  node,
}) => {
  // Filter out non-ipynb content by file extension and checkpoint notebooks
  if (
    node.extension !== `ipynb` ||
    String(node.absolutePath).includes(`.ipynb_checkpoints`)
  ) {
    return
  }

  const content = await loadNodeContent(node)
  const notebook = JSON.parse(content)
  const contentDigest = crypto
    .createHash('md5')
    .update(content)
    .digest('hex')

  const ipynbNode = {
    id: `${node.id} >>> ipynb`,
    children: [],
    parent: node.id,
    internal: {
      type: 'JupyterNotebook',
      content,
      contentDigest
    },
    notebook,
    fileAbsolutePath: node.absolutePath,
    fileRelativePath: node.relativePath,
    fileExtension: node.extension
  }

  console.log(`Creating ipynb node from ${node.relativePath}`)
  createNode(ipynbNode)
  createParentChildLink({ parent: node, child: ipynbNode })
}
