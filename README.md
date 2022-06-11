# Envision-AlgoSimulator

## Contributing Guidelines
### Setting Up
- Fork the repo.
- Clone the forked repo using `git clone <repo-url>` to desired directory.
### Pull Requests
- For each new `submission`, `fix` or `feature` create a new branch named `<github-handle>-<explanatory-name>`.
    ```cmd
    git branch <branch-name>
    ```
- Switch to the new branch.
    ```cmd
    git checkout <branch-name>
    ```
- Make the changes in the new branch.
- Stage the changes for the next commit.<br>
    To stage changes from specific files:
    ```cmd
    git add <filename>
    ```
    To stage all the changes at once:
    ```cmd
    git add .
    ```
    Use `git status` to track the changes made.
- Commit the changes.
    ```cmd
    git commit -m "<commit-message>"
    ```
- Push the changes to your forked repo. <br>
    If you're working on a new branch:
    ```cmd
    git push -u origin <branch-name>
    ```
    If the branch already exists:
    ```
    git push
    ```
- Create a `pull request`.
### Keep in Mind
- Use `meaningful small commits`. Refer to this [link](https://cbea.ms/git-commit/).
- `Remember to fetch` changes from the upstream repo before working on something.

## Learning HTML
- Go through the [lessons](https://learn.shayhowe.com/html-css/) `1`, `2`, `8` & `11` (`12` is optional) `skipping any CSS` that comes up.
- The `assignment` is to create a simple personal website using `HTML`.
- It should be submitted to the subdirectory `learning\personal_website\<github-handle>\`.

## Learing CSS
- Go through the following [link](https://www.codecademy.com/learn/learn-css).
- The `assignment` is to style the page from the previous assignment.

## Learning JS
- Go through the `Coding Train's` [YouTube playlist](https://youtu.be/HerCR8bw_GE) on `p5.JS`

## Implementing an Algorithm
- Implement an algorithm of your choosing using `JS`.
- Submit it to the subdirectory `learning\algorithms\<github-handle>-<algorithm>\` e.g. `learning\algorithms\kid-116-dfs\`.