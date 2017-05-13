# Code For Fort Collins

This repo is for our organizations website at [codeforfoco.org](http://www.codeforfoco.org).

## Getting Started

Before you can run the website on your machine you need to ensure you have some prerequisites installed:

1. [Fork][fork] and clone your fork locally.
1. `cd` into the cloned directory.
1. Run `git submodule update --init --recursive` to install several third-party submodules.
1. Install Ruby V2 or greater, we recommend you use [RVM](https://rvm.io/)
1. Install `bundler` by running `gem install bundler`
1. Install any Ruby dependencies by running `bundle install`

Once all the dependencies have been installed you run the development server with:

```bash
bundle exec jekyll serve
```

Open your browser up to [localhost:8080](http://localhost:8080) to view the development site.

## Contributing

We welcome new contributors.  Be sure to check out guide on [contributing][contributing], which includes instructions on how to fork, clone, branch, commit, pull request and sync your fork.

Not sure where to start? Look for [open issues][githubissue] on GitHub, or message the team on [our Slack site](https://codeforfoco.slack.com/) (can sign up via [email here]()).

TL;DR Contribution Workflow:

1. [Fork][fork] this repository and Clone your fork locally.
1. Checkout a new branch on which to make your changes.
1. Make edits. Try to match existing coding style.
1. Test your changes.
1. Commit your changes. Push your changes to your fork on GitHub.
1. Submit a new [pull request][pullrequest] and your changes will be reviewed and merged.

## Bugs / Feedback / Suggestions

We encourage you to [open up an issue][newissue] if you have any feedback, suggestions or bugs.

## License

MIT, see [LICENSE](/LICENSE) for full license.

[fork]: https://help.github.com/articles/fork-a-repo/
[forkthisrepo]: https://github.com/CodeForFoco/codeforfoco.github.io#fork-destination-box
[contributing]: https://github.com/CodeForFoco/org/blob/master/CONTRIBUTING.md
[githubissue]: https://github.com/CodeForFoco/codeforfoco.github.io/issues
[newissue]: https://github.com/CodeForFoco/codeforfoco.github.io/issues/new
[pullrequest]: https://github.com/CodeForFoco/codeforfoco.github.io/pulls
