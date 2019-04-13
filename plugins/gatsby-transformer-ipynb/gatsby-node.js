const crypto = require("crypto")
const { getFrontmatter } = require("./frontmatter")

exports.onCreateNode = async ({ actions, loadNodeContent, node }) => {
  const { createNode, createParentChildLink } = actions
  // Filter out non-ipynb content by file extension and checkpoint notebooks
  if (
    node.extension !== `ipynb` ||
    String(node.absolutePath).includes(`.ipynb_checkpoints`)
  ) {
    return
  }

  const rawNotebookBody = await loadNodeContent(node)
  const notebook = JSON.parse(rawNotebookBody)
  const frontmatter = getFrontmatter(notebook)
  const contentDigest = crypto
    .createHash("md5")
    .update(rawNotebookBody)
    .digest("hex")

  const ipynbNode = {
    id: `${node.id} >>> ipynb`,
    children: [],
    parent: node.id,
    internal: {
      type: "JupyterNotebook",
      content: rawNotebookBody,
      contentDigest,
    },
    frontmatter,
  }
  createNode(ipynbNode)
  createParentChildLink({ parent: node, child: ipynbNode })
}
