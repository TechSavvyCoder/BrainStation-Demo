# Lecture: Git Setup Guide

## What is Git? Breaking it down
Git is a free and open source distributed version control system.

This means that it is a software tool that lives on your computer and tracks changes in files or sets of files. For this reason, Git is widely used in software development projects. When a file or multiple files in a project have changed, Git can help to determine precisely what has been changed, who changed it, when, and why. Git also has features that enable people who are collaborating on a project to save their current version(s) of the project in something called a _commit_. You can think of commit as a screenshot or a checkpoint of what all of the files in a project look like at a specific moment in time. By creating frequent commits, developers have the ability to reference what a project's code base looked like at different points in the project's development cycle. This is useful for coordinating work among multiple contributors and tracking progress.

If you are on a Mac or Linux, Git comes preinstalled with the OS and you can use it through the Terminal. On Windows, you will be using [Git Bash](https://git-scm.com/downloads) which you should have installed already (visit the "Firing Up the Terminal (Windows Users)" section of the Introduction to Terminal reading in Synapse for instructions if you have not yet installed Git Bash).

You can run the following command in a terminal window to verify that Git is available on your computer:

```bash
git --version
```

The output from this command in your terminal should look something like this:

```bash
git version 2.31.1
```

## Troubleshooting Git Installation
Please refer to this [link](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/) if you face any issues while using the Git installer.