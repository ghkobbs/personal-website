<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://maxmorrison.me">
    <img alt="Ghkobbs" src="https://maxmorrison.me/static/favicon-bdae98d4426a4cdb2881ae2f5489a5d9.png" width="60" />
  </a>
</p>
<h1 align="center">
  Getting started building your personal website
</h1>

Interesting fact, developers don't like spending much time building their own website because they would rather contribute to open source or work on some really cool new project / idea. I know this because that's exactly how I felt working on this code. This starter files aims to help reduce your time on building your own personal website so that you can have more time building awesome apps.

# 🚀 Quick start

## 1.  Contents

Certain information about you or site content may change over time so to make the site a bit more dynamic some contents are being sourced from contentful - a smarter, seamless content management.

There's a free basic plan option with features which are sufficient for this project.

### Signing up for contentful

1. Click on the Get started button
2. Select `I BUILD SOFTWARE`
3. Click on the `Try for free` button and complete and submit the sign up form.
4. Click Explore content modeling under `I create content`.

## Getting started with contentful

### Create new space

1. Click the hamburger menu to open the sidebar and click on `+ create space`.
2. Choose the `Free` space type.
3. Enter any name for your space and click `Proceed to confirmation`.
4. Click `Confirm and create space` on the next modal screen.

### Create content models

This is where we define the content model(e.g form fields) for the website. There will be a total 4 models namely About, Home Page, Project Item and Social Icon.

1. Click `Content models` located at the top of the page.
2. Click on `Add content type`.
3. One after the other, lets create the following models:

### a. About

**Content Type Info**
**Name**: About
**Api Identifier**: about

1. Click on `Create` button to be taken to the next page.
2. Click on `Add field` located on the right. Repeat this step to create all the fields below.
    a. Add a `Text` field type and enter `Title` as the name and click on `Create`.
    b. Add a `Text` field type and enter `About Image` as the name and click on `Create`.
    c. Add a `Rich Text` field type and enter `About Text` as the name and click on `Create`.

### b. Home Page

**Content Type Info**
**Name**: Home Page
**Api Identifier**: homePage

1. Click on `Create` button to be taken to the next page.
2. Click on `Add field` located on the right. Repeat this step to create all the fields below.
    a. Add a `Text` field type and enter `Title` as the name and click on `Create`.
    b. Add a `Text` field type and enter `Greating` as the name and click on `Create`.
    c. Add a `Rich Text` field type and enter `Introduction` as the name and click on `Create`.
    c. Add a `Media` field type and enter `Profile` as the name and click on `Create`.

### c. Project Item

**Content Type Info**
**Name**: Project Item
**Api Identifier**: projectItem

1. Click on `Create` button to be taken to the next page.
2. Click on `Add field` located on the right. Repeat this step to create all the fields below.
    a. Add a `Media` field type and enter `Featured Image` as the name and click on `Create`.
    b. Add a `Text` field type and enter `Title` as the name and click on `Create`.
    c. Add a `Text` field type and enter `Tagline` as the name and click on `Create`.
    d. Add a `Text` field type and enter `Slug` as the name and click on `Create`.
    e. Add a `Date and Time` field type and enter `Published Date` as the name and click on `Create`.
    f. Add a `Rich Text` field type and enter `Overview` as the name and click on `Create`.
    g. Add a `Text` field type and enter `Client` as the name and click on `Create`.
    h. Add a `Text` field type and enter `Role` as the name and click on `Create`.
    i. Add a `Media` field type and enter `Desktop Images` as the name, Choose many files and click on `Create`.
    j. Add a `Media` field type and enter `Mobile Images` as the name, Choose many files and click on `Create`.

### d. Social Icon

**Content Type Info**
**Name**: Social Icon
**Api Identifier**: socialicons

1. Click on `Create` button to be taken to the next page.
2. Click on `Add field` located on the right. Repeat this step to create all the fields below.
    a. Add a `Text` field type and enter `Title` as the name and click on `Create`.
    b. Add a `Text` field type and enter `Link` as the name and click on `Create`.
    c. Add a `Media` field type and enter `Icon` as the name and click on `Create`.

## Begin adding content

For the app to work fully without any errors there have to be at least one entry for each content model. Now let me go ahead and walk you through creating your first content. This process is the same for any future content you may plan to add later.

1. Click `Content` located at the top of the page.
2. Click `Add entry` located at the top right of the page and click on a content type.
3. Fill the various fields for the content type and publish the entry.

Note: Repeat steps to add entries to each content model type. Each model must have at least one content before starting the up.
  
## Add environment variables

Inside your contentful dashboard:
1. click on `settings` located at the top of the page and select API Keys.
2. click on `Add API Key` located at the top right of the page to create a new API key. 

Create `.env.development` file inside the `personal-website` folder and add the following environment variables. Replace `your-contentful-space-id` and `your-contentful-access-token` with values from the API Key you created.

```text
# An interactive playground to test Graphql Queries
GATSBY_GRAPHQL_IDE=playground

# Contentfull space Id
CONTENTFUL_SPACE_ID=`your-contentful-space-id`

# Contentfull access token
CONTENTFUL_ACCESS_TOKEN=`your-contentful-access-token`
SITE_URL=your-website-address
```

We will later add values for contentfull space Id and access token.
     

## 2.  Installation.

### Fork the `ghkobbs/personal-website` repo

You'll be making your own copy of the "these starter file" repository so you have your own project to customize. A fork is a copy of a repository. So select "Fork" atop [the `ghkobbs/personal-website` repository](https://github.com/ghkobbs/personal-website)

Once you've found a home for your forked repository, it's yours so you're ready to begin development.

### Install in your local development environment

#### Prerequisites

Ensure you have the following installed on your development machine before proceeding to the next step. You can also skip this step if you already have everything below installed.

1. Download and install [`Nodejs`](https://nodejs.org/en/) - includes npm which is what we'll need to install our dependencies
2. Download and install [`Git Bash`](https://gitforwindows.org/) or any other command line program which allows you to interface with the underlying git program.

#### Install Gatsby Cli

Gatsby is a fast modern site generator for React. Gatsby cli(Command Line Tool) is the main entry point for getting up and running with a gatsby application.

  1. Open Git Bash or Terminal(Mac users only).
  2. Install Gatsby Cli

```shell
# install gatsby cli version 2.8.12
npm install -g gatsby-cli@2.8.12
```

#### Cloning repository to devlopment machine
    
    To clone your repository, follow [`Github's Instructions`](https://help.github.com/articles/cloning-a-repository/) on how to do that.

#### Change into your new directory

Navigate into your new site’s directory.

```shell
cd personal-website
```

#### Install Dependencies

In your command line tool, type the command below and hit enter.

```shell
npm install
```

#### Start developing

Start up your website

```shell
npm run develop
```

**Open the source code and start editing!**

Your site is now running at `http://localhost:8000`!

_Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

Open the `personal-website` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── src
    ├── static
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, I recommend starting with the [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to the documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world)

##  Auto build website after Content Update

By default, content will not update automatically on netlify even though our content is hosted on contentful. To change we would have to create a webhook within our contentful dashboard. Follow the steps below to create and configure contentful webhook.

1. Visit [Netlify's Build Section](https://app.netlify.com/sites/ghkobbs/settings/deploys#build-hooks) to add a new build hook.
2. Enter a build hook name and choose the repo branch to build from.
3. Click the `Save` button to add the build hook.
4. Visit [Contentful's Webhook Section](https://app.contentful.com/spaces/2xvdr3j3lcin/settings/webhooks) and click the button on the top right to add a new webhook.
5. Give your webhook a name.
6. Copy the build hooks url from [Netlify's Build Section](https://app.netlify.com/sites/ghkobbs/settings/deploys#build-hooks) and paste it in the url field of the webhook details. Change the url request verb to POST.
7. Select `Select specific triggering events` under triggers and Check Publish and Unpublish under Entry and Asset.
8. Filter should be: `Environment ID (sys.environment.sys.id)` `equals` `master`.
9. Set content type to `application/json`
10. Select `Use default payload` under payload.
11. Click on the `Save` button located at the top right to save the webhook.

<!-- AUTO-GENERATED-CONTENT:END -->
