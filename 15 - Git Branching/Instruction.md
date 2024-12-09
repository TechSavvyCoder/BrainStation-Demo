# Exercise: Git Branching
Today we'll practice with two important aspects of working with Git and GitHub: **branching** and **merging** updates to a repo.

To get started, `cd` into the `git-practice` directory that you created previously, in which you built a simple HTML page about your favorite musician and a `README.md` file. Remember that you can use the `pwd` command in terminal to check your current working directory.

Verify that your directory has a git repo initialized by running `git status`. You will know that you have initialized a git repo as long as you do not see output that says `not a git repository`.

Verify that you are on the `main` branch of your repo. You can use the `git branch` command in terminal to see a list of local branches. Your current branch will be marked with a `*`. Type `q` to exit the branch list.

Verify that you have configured the connection between your local Git repo and your remote GitHub repo by running the `git remote -v` command in your terminal. Your output should be your GitHub HTTPS URL or SSH URL.

Open your `git-practice` directory in VSCode.


## Create and Checkout a Branch
From the `main` branch, create and checkout a branch called `feature/add-image` in your terminal.

As a reminder, the syntax for creating and checking out a new branch is as follows:

```bash
git checkout -b <nameofbranch>
```

## Make Updates to a Branch
Ensure that you are on your new branch by running the `git branch` command again in your terminal and verifying that your new branch is marked with a `*`.

Currently, your `index.html` file should have an `<h1>` tag and a `<p>` tag. Underneath the `<p>` tag, add an image of your favorite musician in VSCode.

Add, commit, and push your changes to your new branch (remember to include a meaningful, concise, and descriptive commit message). Recall that the syntax for the command to push to a new branch for the first time is as follows:

```bash
git push -u <remotename> <branchname>
```

## Switch Between Branches
When you push updates to a branch, those updates do not impact other branches on your project. Checkout your main branch by running the following command in terminal:

```bash
git checkout main
```

Note that when you are checking out a branch that already exists, the `-b` flag is not necessary.

When you checkout a branch, your working copy of the project is updated to be the version of your code on that particular branch. Inspect your `index.html` file in VSCode. The image that you added to your `index.html` file should not appear in VSCode.

Check back out the new branch you created and inspect your `index.html` file in VSCode again. Now you should see the image that you added to your new branch.

## Merge a Branch
To update your main branch with the changes you made on your `feature/add-image` branch, checkout your main branch one more time, and run the following command in your terminal:

```bash
git merge feature/add-image
```

The `git merge` command should be run **from the branch that you would like to integrate changes into**. Running this command creates a new **merge commit** that contains the updates that you made **on the branch that is being merged**.

Push the changes that you just merged up to your remote main branch.

```bash
git push
```

Note that `-u origin main` flag and arguments are not necessary here, since you have already pushed to this branch.

Visit your remote repo on GitHub. Verify that your `index.html` file on the `main` branch contains the updates you made on your `feature/add-image` branch.