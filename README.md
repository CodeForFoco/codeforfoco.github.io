# Code For Fort Collins

This git repo is for the site [codeforfoco.org](http://www.codeforfoco.org).

## Contributing

We welcome new contributors.  Be sure to check out guide on [contributing][contributing], which includes instructions on how to fork, clone, branch, commit, pull request and sync your fork.

Not sure where to start? Look for [open issues][githubissue] on GitHub, or message the team on [our Slack site](https://codeforfoco.slack.com/) (can sign up via [email here]()).


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

## Seeing What Changes Will Look Like

### Locally test changes

A few requirements:
 1. Requires a working installation of Ruby programming language.
 2. Installed `bundler` tool for installing "gems" (`gem install bundler`).
 3. Local git clone of [this repo][forkthisrepo] where you have changes to test.

Previewing

```bash
cd codeforfoco.github.io
bundle install
bundle exec jekyll serve
open http://127.0.0.1:8080/  # open this address in web broswer
```


## Site Roadmap

- Need to develop content

## Bugs / Feedback / Suggestions

We encourage you to [open up an issue](https://github.com/CodeForFoco/codeforfoco.github.io/issues/new) if you have any feedback, suggestions or bugs.

## License

MIT, see [LICENSE](/LICENSE) for full license.

[fork]: https://help.github.com/articles/fork-a-repo/
[forkthisrepo]: https://github.com/CodeForFoco/codeforfoco.github.io#fork-destination-box
[contributing]: https://github.com/CodeForFoco/org/blob/master/CONTRIBUTING.md
[githubissue]: https://github.com/CodeForFoco/codeforfoco.github.io/issues
[pullrequest]: https://github.com/CodeForFoco/codeforfoco.github.io/pulls
