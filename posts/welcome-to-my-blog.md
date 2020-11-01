---
title: "Welcome To My Blog"
tags: ["react", "gatsby", "mdx", "graphql"]
published: true
date: "2018-08-20"
---
This is and introduction post about this blog, what technologies are bring used to develop and publish this blog.
<br>
This blog is developed using [Gatsby](https://www.gatsbyjs.com/) a react-based framework. It uses [MDX](https://mdxjs.com/) to support markdown 
for blog content, simply write markdown and get your blog posts out.
<br>
It has CI integrated (Travis) to deploy the changes made to a github pages site. As soon as you push something on master branch
travis calls the deploy script added in packages.json
<br>
It runs
<br>
`gatsby build `
<br>
Gatsby generates production ready optimized static HTML ([source](https://www.gatsbyjs.com/docs/quick-start/)) 
<br>
and utilized `gh-pages` packages to build the content ready for a github pages site, it runs
<br>
`gh-pages -d public -r <repo-url>`
<br>
`-d` argument specifies the target directory for `gh-pages` output and `-r` specifies the repo to push the 
output content in. For my case I've generated a GitHub Token (it's stored in travis secrets to get swapped while running the job) and specified it as part of the URL so this script
can push the output content to my github pages [repository](https://github.com/mraarif/mraarif.github.io)
every time I push something to `master` branch and want it get published automatically.
