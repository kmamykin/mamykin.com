import React from "react"
import Disqus from 'disqus-react'

export default ({ disqusShortname, url, identifier, title }) => {
  const disqusConfig = {
    url: url,
    identifier: identifier,
    title: title,
  }
  return (
    <div>
      <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  )
}
