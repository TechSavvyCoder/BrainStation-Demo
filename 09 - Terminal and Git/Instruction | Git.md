# Exercise: Git

## Create a Local Git Repository
1. [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) on your computer if you haven’t already. Please see the 'Installation' and 'Readings' sections in Synapse for more details. You can check if Git is already installed by running the command `git --version` in the terminal.

2. In your `brainstation` directory, create a directory called `git-practice`. `cd` into the `git-practice` directory and initialize a Git repo.

3. Be careful where you call `git init`!
Once you've initialized a new Git repo you can double check the path to the local-repo with the command `git worktree list`. The reason to be careful is that you don't want to accidentally commit all the files in your documents folder, or your desktop, only project files in your project folder should be committed.

4. Create an `index.html` file in your project folder. Include HTML boilerplate. In the body of your HTML, include an `<h1>` tag that says "My Favorite Musician." Underneath your `<h1>` tag, include a `<p>` tag with a sentence about your favorite musician.

5. **Add** the `index.html` file to the [staging area](https://dev.to/sublimegeek/git-staging-area-explained-like-im-five-1anh)

6. **Commit** the changes to the **local repository**. Remember to include a commit message. Try to write descriptive commit messages, for more info see: [How to write good commit messages](https://chris.beams.io/posts/git-commit/).

7. Check your status every step of the way with `git status`.

## Pushing to a Remote
1. [Create an empty private GitHub repository](https://github.com/new)

* Ensure that you choose "Private"
* Leave all other options with the default values
* **Do not** select the checkbox: "Initialize this repository with a README"

2. Add the remote to your local repo. You will see setup instructions for how to do this once your GitHub repo is created. Copy and paste the setup instructions under the heading: "…or push an existing repository from the command line"

```bash
# add your remote origin be sure to change yourusername/yourrepo to match your info
git remote add origin <GitHub repo URL || SSH URL>
git branch -M main

# -u will set an upstream, meaning you can use git push after running this command and it will be connected to origin master by default
git push -u origin main
```

3. Create a `README.md` file in the `git-practice` directory, and add the sentence "This is a starter README file." Then run `git status`. You should see the README file in red, with a message that it is not being tracked.

4. Add the `README.md` to your staging area using `git add .` or `git add README.md`. Then run `git status`, the README.md should now be a green color, meaning it's been added to the staging area and is ready to commit.

5. Commit the changes, `git commit -m "update README.md"` Commit messages are important, the example here doesn't have much info, e.g. what was updated in the readme?

6. Push the new change to your remote, `git push` or `git push origin main`

> "If you make a mistake, first ensure if your repository has a remote, and proceed to follow steps three to six."

## Additional Resources
* [Git Handbook](https://guides.github.com/introduction/git-handbook/)
* [Writing good commit messages](https://chris.beams.io/posts/git-commit/)