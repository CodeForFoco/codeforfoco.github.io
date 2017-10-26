# Code For Fort Collins
<p align="center">
  <a href="http://www.codeforfoco.org">
    <img alt="CFFC logo" src="http://codeforfoco.org/assets/images/cff-logo.min.svg" width="400"/>
  </a>
</p>

This repo is for our organization's website at [codeforfoco.org](http://www.codeforfoco.org).

## Getting Started

Before you can run the website on your machine you need to ensure you have some prerequisites installed:

1. [Fork this repository][forkthisrepo] and clone your fork.
1. `cd` into the cloned directory.
1. Run `git submodule update --init --recursive` to install several third-party submodules.
1. Install Ruby V2 or greater, we recommend you use [RVM](https://rvm.io/).
1. Install `bundler` by running `gem install bundler`.
1. Install any Ruby dependencies by running `bundle install`.

Once all the dependencies have been installed you run the development server with:

```bash
bundle exec jekyll serve
```

Open your browser up to [localhost:8080](http://localhost:8080) to view the development site.

## Contributing

We welcome new contributors.  Be sure to check out guide on [contributing][contributing], which includes instructions on how to fork, clone, branch, commit, pull request and sync your fork.

Not sure where to start? Look for [open issues][githubissue] on GitHub, or message the team on [our Slack site][slack]. If you aren't on our Slack, [click here for an invite][slackinvite].

TL;DR Contribution Workflow:

1. [Fork][fork] this repository and Clone your fork locally.
1. Checkout a new branch on which to make your changes.
1. Make edits. Try to match [existing coding style](https://github.com/CodeForFoco/codeforfoco.github.io#code-standards).
1. Test your changes.
1. Commit your changes. Push your changes to your fork on GitHub.
1. Submit a new [pull request][pullrequest] and your changes will be reviewed and merged.

### Code Standards

Development in a team environment can result in code inconsistency, which may 
have undesired impacts including a reduction in readability. Therefore we ask 
that you standardize and "beautify" your code before submitting a pull request. 
A few options to simplify this process are outlined below.

#### [EditorConfig project](http://editorconfig.org/) 

> EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs.

This tool eliminates common inconsistencies such as tab style and line endings, 
and has plugins available for most modern IDEs and text editors. Find yours [here](http://editorconfig.org/#download).

#### Linters

Linters validate your code and provide errors and warnings when validation is 
not met. Here are some linters for common text editors:
- [linter](https://atom.io/packages/linter) for **Atom** and these 
language-specific linters:
  - [linter-scss-lint](https://atom.io/packages/linter-scss-lint)
  - [linter-jshint](https://atom.io/packages/linter-jshint)
  - [linter-htmlhint](https://atom.io/packages/linter-htmlhint)
- [SublimeLinter](https://github.com/SublimeLinter/SublimeLinter3) for **Sublime Text** and these language-specific linters:
  - [SublimeLinter-scss-lint](https://github.com/attenzione/SublimeLinter-scss-lint)
  - [SublimeLinter-jshint](https://github.com/SublimeLinter/SublimeLinter-jshint)
  - [SublimeLinter-html-tidy](https://github.com/SublimeLinter/SublimeLinter-html-tidy)
  
#### Beautifiers

The settings for beautifying this repo's code is found in `.csscomb.json` and 
`.jsbeautifyrc` at the root of the project. Implementation of the settings is 
carried out by various plugins specific to each text editor. Here are some of 
the most common:
- [atom-beautify](https://atom.io/packages/atom-beautify) is an all-in-one 
package for **Atom** that will handle beautification of most common languages (FYI 
it's a big package so it takes a little while for the installation to complete!).
- **Sublime Text** does not have an all-in-one beautifier, but
[Sublime-HTMLPrettify](https://github.com/victorporof/Sublime-HTMLPrettify)
should suffice for this project.

## Site Architecture

The CFFC website will ultimately adhere to an organized, intuitive, and SEO-friendly navigation and content structure, currently based on [this model](site-architecture-chart):

![Site architecture diagram][site-architecture-image]

## Bugs / Feedback / Suggestions

We encourage you to [open up an issue][newissue] if you have any feedback, suggestions or bugs.

## License

MIT, see [LICENSE](/LICENSE) for full license.

[contributing]: https://github.com/CodeForFoco/org/blob/master/CONTRIBUTING.md
[fork]: https://help.github.com/articles/fork-a-repo/
[forkthisrepo]: https://github.com/CodeForFoco/codeforfoco.github.io#fork-destination-box
[githubissue]: https://github.com/CodeForFoco/codeforfoco.github.io/issues
[newissue]: https://github.com/CodeForFoco/codeforfoco.github.io/issues/new
[pullrequest]: https://github.com/CodeForFoco/codeforfoco.github.io/pulls
[site-architecture-image]: assets/images/CFFC-site-architecture.png
[site-architecture-chart]: https://www.lucidchart.com/documents/view/eb916f30-ba86-417d-bb4a-999b6c558274
[slack]: https://codeforfoco.slack.com/
[slackinvite]: https://codeforfocoslack.herokuapp.com/
