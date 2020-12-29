# About
- This is the source code for my personal website

# Goals
- Presenting my profile + portfolio + contents related to current work & interests

# To do list

## Design/Layout
- [ ] Standardize fonts
- [ ] Set font size
- [ ] Add fab con
- [ ] Add site logo
- [ ] Add MIT License

## Functionality
- [ ] Config set up
- [ ] Migrate from Jekyll to Gatsby
- [ ] SEO optimization
- [ ] seo - share : title, image cards
- [ ] thumbnail images for post list
- [ ] google search console
- [ ] sitemap.xml
- [ ] multilingual (KOR/ENG) options fot website
- [ ] Add HTML5 interactive features and effects (e.g. gradual highlight, wavy underscore, color highlight etc.)
- [ ] Develop Squarespace locked page like secured web page

## Portfolio/Projects
- [ ] Add "+" page
- [ ] Add Github repo cards
- [ ] Enlist projects for portfolio
- [ ] Set column divides/frame for the project featuring
- [ ] Prep title/keyword/image/contents for each project
- [ ] Add portfoilo contents (A: Academic W: Work O: Others)
  - [ ] A: remote work regerssion - proceeding
  - [ ] A: QMSS MA work paper
  - [ ] A: DTLV website
  - [ ] O: TDI Capstone/ CEO M&A
  - [ ] A: Artists' fame, circle and creativity
  - [ ] W: Mapbox map tool: Tax rate
  - [ ] W: Radius Analysis library pack
  - [ ] W: Air traffic analysis library pack
  - [ ] W: WARN web scraper/analyzer
  - [ ] W: BBL/Elevator - case study
  - [ ] W: TDI projects github repo card (hold)
  - [ ] W: DataHub HWE ("+")

## Blog
- [ ] Write brainstormed contents (min. twice a month)

---------------------------------------

# Done: to do list

# Cheat Sheet

```bash
# Git repo update
$ git fetch
$ git pull origin source

# Gatsby NodeJS
$ npm install -g gatsby-cli

# To run gatsby in development mode
# get inside the gatsby folder
$ npm run develop

# deploy/build  - after editing
$ npm run build

# build & deploy in localhost
$ gatsby build
$ gatsby serve

# deploy to my github pages
# https://www.gatsbyjs.com/docs/how-gatsby-works-with-github-pages/
# on  branch
$  npm run deploy

# My netlify.toml:
$ [build] base = "blog" publish = "public" command = "npm run build"

# My build command:
$ npm install && gatsby build --prefix-paths && cd public && mkdir blog && mv * blog

# OR deployment on the root directory with Git command

$ git add .
$ git commit -m "your message"
$ git push -u origin master

```
