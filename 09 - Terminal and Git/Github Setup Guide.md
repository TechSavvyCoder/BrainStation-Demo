# Lecture: Github Setup Guide

## Git & GitHub? What's the Difference?
Git enables you to create and make changes to _repositories_ (also known as _repos_) locally. You can think of a repo like a container for a project. If a git repo is initialized for a project, that means that you are able to perform various version control operations within that project **on your computer** (that's where the _locally_ part comes from).

But what if you want to collaborate on a project, or otherwise have a place where a project is accessible to others? That's where GitHub comes in.

GitHub is a web-based platform that serves as a host for Git repositories on the Internet. Git enables us to store and manage repos locally (on our own computers), whereas GitHub enables us to store and manage repos remotely (in other words, on the web or on the cloud, where others can view and contribute to them too).

If you don't have a GitHub account yet, visit the [GitHub website](https://github.com/) and sign up for free. Your projects and portfolio will live on GitHub, and you will share this with potential employers, so choose the email address, user name, and avatar accordingly.

## Configuring Your GitHub Credentials
Configure the GitHub username and email address that will be associated with each commit in the future by running the following commands in terminal:

```bash
git config --global user.name "FirstName LastName"
git config --global user.email "youremail@provider.com"
```

You can confirm that your GitHub credentials have been stored correctly by running the following commands in terminal:

```bash
git config user.name
git config user.email
```

The output from these commands in terminal should be the values that you provided. You may reassign these values any time your GitHub username or email address changes.

## Configuring Global Git Options
There are several default Git config options that need to be updated for better developer experience.

Make sure to run the following commands in your terminal:

> "Set default branch to `main`"
```bash
git config --global init.defaultBranch main
```

> "Set default option for pulling from remote branch"
```bash
git config --global pull.rebase false
```

> Set remote branches to be created automatically on initial push from local
```bash
git config --global push.autoSetupRemote true
```

> Set Git to be case sensitive
```bash
git config --global core.ignoreCase false
```

## Transferring Files From Your Computer to GitHub
The process of downloading a remote GitHub repo onto your local machine is called _cloning_. The process of transferring a local repo or updates to a local repo up to a remote GitHub repo is called _pushing_.

You can use a variety of protocols to securely perform these and other operations relating to transferring files from a local repo to a remote repo (and vice versa). Two of the most popular security protocols used for this purpose are HTTPS and SSH.

We recommend that you use the SSH protocol in order to access your GitHub repositories by configuring an SSH Key. To use the HTTPS protocol, you would need to configure a personal access token, which can expire. However, once your SSH Key is setup on your computer, it will never expire.