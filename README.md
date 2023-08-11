# :purple_heart: dashyjs :purple_heart:

JavaScript/VSCode/Node Setup for Dashy :purple_heart: :purple_heart: :purple_heart:

## :purple_heart: Visual Studio Code

VS Code is your code editor.

### Extensions (Install + Enable)

- [ ] **Smart** Semicolon (autoinserts semicolons)
- [ ] **ESLint** (autocorrects common code formatting mistakes)
- [ ] **Prettier** (auto-formats code to make it look _prettier_)
- [ ] **Quokka** (runs JS code inline so you can see results real-time)
- [ ] **JavaScript (ES6) Code Snippets** (shortcuts to produce commonly used code segments)

### Configurations

- [ ] <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> > Type `settings.json` > **Preferences: Open User Settings (JSON)**
- [ ] Copy-pasta the following code into the above `settings.json` file

```
{
  "editor.formatOnSave": true,
  "prettier.jsxSingleQuote": true,
  "prettier.singleQuote": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.fontSize": 13,
  "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\git-cmd.exe",
  "terminal.integrated.shellArgs.windows": [
    "--command=usr/bin/bash.exe",
    "-l",
    "-i"
  ],
  "smartsemicolon.autoLineChange": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "typescript.updateImportsOnFileMove.enabled": "always",
  "security.workspace.trust.untrustedFiles": "open",
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "editor.linkedEditing": true,
  "editor.formatOnPaste": true,
  "editor.bracketPairColorization.independentColorPoolPerBracketType": true
}
```

## :purple_heart: Git Integration

Git is your version control system - it saves all your code files as you update them, so that you never lose progress/can revert to past working versions of code in case you made a bad edit.

- [ ] Create a GitHub account: https://github.com/
- [ ] Download Git for Windows: https://git-scm.com/download/win
- [ ] Make Git Bash the default VS Code Terminal
- [ ] Set up Git Auth (Run each command in Git Bash VS Code Terminal, ask Arunika to add key to her Repo)

```
ssh-keygen -R github.com
ssh-keygen -t ed25519 -C "your_email@example.com"
```

- [ ] Pull in remote Git code into your PC: `git clone git@github.com:aoyshi/dashyjs.git`
- [ ] Create your own branch: `git checkout -b "dashy/first-commit"`
- [ ] Add + push your changes to the remote repo: `git commit -am "my first commit"; git push`

## :purple_heart: Node and NPM Installation

- JavaScript is a programming language, and a code engine is required to run it. NodeJS is that engine that runs JS code on your PC.
- "node modules" are helpful packages of code that other developers have created, which you can reuse for your projects.
- NPM is the package management system that lets you install/uninstall these useful "node modules" from other devs.
- NVM is the management system that lets you install/uninstall different versions of NodeJS and NPM.

Run the following in Git Bash VS Code Terminal

- [ ] Install NVM:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"

[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

- [ ] Close terminal, reopen a new one and run this to verify: `command -v nvm`
- [ ] Install Node: `nvm install node` and verify `node -v`
- [ ] Install NPM: `nvm install-latest-npm` and verify `npm -v`

## :purple_heart: Running The Code

- [ ] Pull in remote Git code into your PC by running this in your GitBash VSCode Terminal: `git clone git@github.com:aoyshi/dashyjs.git`
- [ ] Install all node modules required by this code: `npm install`
- [ ] Go into the sourcecode directory: `cd dashyjs/src`
- [ ] Run the main code file and see the output in the terminal: `node main.js`

## :purple_heart: First Discord Bot

- The instructions here are pretty good! >> https://www.freecodecamp.org/news/create-a-discord-bot-with-javascript-nodejs/
- Pull in code from the remote Git repo, and run the bot on your PC:

```
git clone git@github.com:aoyshi/dashyjs.git
cd dashyjs
git fetch origin squid/sample-discord-bot
git checkout squid/sample-discord-bot
cd src
npm install
```

- Create a `.env` file in the `/src` folder, and place the Discord bot token in it like this:

```
TOKEN=ghtry892347nfdsjkbdfhbdfjg
```

- Start the bot! >> `npm start`
