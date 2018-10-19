## Setting up the environment
See the instructions at [here](https://github.com/pennlabs/components/blob/master/README.md)

## How to develop a new component (checklist)
- [ ] Create a folder with the name of your component (don't forget to add a path to it at `src/index.js`)
- [ ] While creating your component, do not forget about PropTypes and accessibility (the lint will warn you about these things :))
- [ ] After creating you component, add a story at `/stories`, run `yarn storybook` and check if your component is working as expected
- [ ] At your component's folder, add a test for it. Then, run `yarn test` and check if your tests are passing
- [ ] We also do [Storyshot](https://github.com/storybooks/storybook/tree/master/addons/storyshots) testing! Do not forget to see your changes on the storyshot (storyshot runs automatically when you run `yarn test`
- [ ] If you believe your work is correct, update the snapshots using `yarn test -- -u`
- [ ] Now, it is time to open your PR. Give your branch a good name and follow our commit styleguide (you can check it [here](#commit-style-guide)
- [ ] Is your commit history coherent? For example: if your branch is adds a new feature, does it have any "fix" commit? Are there two or more commits that can be squashed into a single one?

## Commit style guide
In every Pull Request, Gitcop will enforce that the commits in the PR are following our commit styleguide.
Our styleguide is the following:
  - Commit message: maximum length of 50 characters
  - Commit body: maximum length of 72 characters
  - Pattern for commit message: `%{scope}: %{type} %{description}`, where:
    * `%{scope}`: what are you changing/adding/fixing?
    * `%{type}`: what did you do? Can be one of the following: `add, remove, refactor, move, bump, release, update, fix`
    * `%{description}`: describe what you did
