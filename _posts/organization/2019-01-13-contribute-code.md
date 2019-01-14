---
layout: page
title: "Contribute Code"
permalink: /contribute-code/
categories: organization
---

## Contributing to Code for Foco.

Everyone is welcome to come and contribute to our projects and improve Code for Fort Collins.

We use a fork / pull request workflow, a brief description can be found in our TL;DR; whereas, a more in depth guide is outlined in the Contributing Guide.

If for some reason you still feel lost, there are some resources related to the workflow that may help in the [Git & Github Resources](#resources) section.

## <a name="tldr"></a> TL;DR Contributing Guide

1. [Fork](https://help.github.com/articles/fork-a-repo/) the project repository and clone your fork.
1. Make a patch branch.
1. Make changes, commit and push.
1. Submit a pull request and your changes will be reviewed and merged.

## <a name="contribute"></a> Contributing Guide

First, `fork` the repository,

Next, `clone` your `fork`:

```bash
git clone <your fork url>
```

Navigate into the directory using `cd`.

Now we want to add the original repository we forked from as a remote upstream, this way we can sync back up with it later without deleting the fork:

```bash
git remote add upstream <original repository URL>
```

To confirm, let's list our remotes:

```bash
git remote -v
```

Then, `checkout` a new `branch` from `master`:

```bash
git checkout -b my-fix-branch master
```

Make some changes! Any time you make a change be sure to `commit` with a detailed message:

```bash
git commit -am "commit message here"
```

- the `-a` command line option will automatically "add" and "rm" edited files.
- the `-m` command line option will specify that your commit message follows in quotes.

When you are done making changes, `push` your changes on your branch to `Github`:

```bash
git push origin my-fix-branch
```

Now submit a pull request! We'll review the request and either accept it or ask you to make some changes.

After your pull request is merged, you can delete your branch on Github:

```bash
git push origin --delete
```

Switch back to your `master` branch:

```bash
git checkout master -f
```

And delete your local fix branch branch:

```bash
git branch -D my-fix-branch
```

Finally, update your fork with the master branch of the original repo:

```bash
git pull -ff upstream master
```

<a name="resources"></a>
## Git & Github Resources

If you are new to `git`, Github has several tutorials on what a fork is, how to fork, configure a remote and sync with a remote repository:

- [About Forks](https://help.github.com/articles/about-forks/)
- [How to fork a Repo](https://help.github.com/articles/fork-a-repo/).

They have a pretty great guide overall about a fork workflow:

- [Working with Forks](https://help.github.com/articles/working-with-forks/)

This article includes how to configure a remote for a fork, and how to sync a fork with the original repo:

- [Configuring a remote for a fork](https://help.github.com/articles/configuring-a-remote-for-a-fork/)
- [Syncing a Fork](https://help.github.com/articles/syncing-a-fork/)

Finally, if you are not sure how to make a pull request, this article may help you:

- [About Pull Requests](https://help.github.com/articles/about-pull-requests/)
