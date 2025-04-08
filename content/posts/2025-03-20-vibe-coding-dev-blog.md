---
title: "First blog post ✨"
lastEditDate: "2025-03-20"
lastEditLocation: "-23.506641, -46.748079"
lastEditBy: "Brenno Nascimento"
description: "How I set up this portfolio blog using Next.js, and GitHub by 'vibe coding'"
---

## Creating a Dev Blog with AI

This is the first post for this blog! ✨
I wanted a simple way to share my thoughts in an _enjoyable_ way. 💁🏼‍♂

### The Blog Setup

This blog is built with:

- **Next.js** ⚛️
- **Markdown**📝
- **GitHub**🐙
- **Vercel**🔼
- **Claude AI**🤖

I wanted a setup to be nostalgic - similar to the way it was published back on the early web in the '90s. 🌐
Instead of complex CMS platforms, each blog post is simply a markdown file in a GitHub repository.

The best part is that I can write and publish new posts directly from my phone. Here's the workflow:

1. Open GitHub mobile app📱
2. Go to my repository's `/content/blog/` folder 📂
3. Create a new file with the pattern: `YYYY-MM-DD-post-slug.md` ➕📝
4. Add frontmatter (title, date, description...) and write content in Markdown 🏷️#️⃣
5. Commit directly to the main branch: ✅🌿

Within 5 minutes or less, Vercel rebuilds the site and a new post is up and running.✨

### Why This Approach?

As developers, we often over-engineer our personal projects. But sometimes, simpler is better. In this case:

- **No database needed**🙅
- **Writing in Markdown**📝
- **Version control built-in**📦
- **Deploy from anywhere**🚀
- **Fast page loads because of static generation**⚡

### Static generation

Behind the scenes, Next.js uses static site generation with `getStaticProps` and `getStaticPaths` to build pages at compile time rather than on each request.
The Markdown files are parsed using libraries like `gray-matter` and `remark`.

This approach gives the simplicity of static files with the component-based architecture of React.

### Next Features

I plan to enhance this setup over time with:

- Code syntax highlighting
- Make the Blog component aggregate posts by year, month and date
- Tag categorization
- Tag filtering

At the end the core workflow is just - write, commit, publish.

Happy coding! 👨🏼‍💻
