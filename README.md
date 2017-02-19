# Code For Fort Collins

This git repo is for the site [codeforfoco.org](http://www.codeforfoco.org).

## Contributing

We welcome new contributors.  Be sure to check out guide on [contributing][contributing], which includes instructions on how to fork, clone, branch, commit, pull request and sync your fork.

Not sure where to start? Look for [open issues][githubissue] on GitHub, or message the team on [our Slack site](https://codeforfoco.slack.com/) (can sign up via [email here]()).


TL;DR Contribution Workflow:

1. [Fork][fork] this repository and Clone your fork locally (be sure to do a `git submodule update --init --recursive` afterward as there is an external `Sass` dependency, and read [this](https://github.com/blog/2104-working-with-submodules) if you want more info). Afterward be sure to run `git submodule update --init --recursive` to ensure any third-party submodules are installed.
1. Checkout a new branch on which to make your changes.
1. Make edits. Try to match existing coding style.
1. Test your changes.
1. Commit your changes. Push your changes to your fork on GitHub.
1. Submit a new [pull request][pullrequest] and your changes will be reviewed and merged.



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
