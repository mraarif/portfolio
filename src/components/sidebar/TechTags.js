import React from "react"

import TechTag from "../tags/TechTag"

const TechTags = (props) => {
  const labels = props.labels
  const posts = props.posts

  const labelsMeta = labels.map(label => {
    let should_link = false
    posts.forEach(post => {
      if (post.node.frontmatter.tags.includes(label.tag)) {
        should_link = true
      }
    })
    return [label.tag, should_link]
  })

  // const categories = labelCount.filter(label => {
  //     return label[1] > 0
  // })
  //
  // const tags = categories.map(category => {
  //     return category[0]
  // })

  const getTechTags = (tags) => {
    const techTags = []
    tags.forEach((tag, i) => {
      labels.forEach((label) => {
        if (tag[0] === label.tag) {
          techTags.push(<TechTag key={i} tag={label.tag} tech={label.tech} name={label.name} size={label.size}
                                 color={label.color} should_link={tag[1]}/>)
        }
      })
    })
    return techTags
  }


  return (
    <>
      <h4>Tech Topics</h4>
      <div className="d-block">
        {getTechTags(labelsMeta)}
      </div>
    </>
  )
}


export default TechTags