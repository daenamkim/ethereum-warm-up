# Ethereum Smart Contract Deployment and Test

This app is to deploy and test an Ethereum Smart Contract.

Install packages first.

```sh
yarn
```

## Test through Ganache local network

```sh
yarn test
```

## Test through with Rinkeby test network

You need to get access key from [Infura](https://infura.io/).
If you don't have an account just sign up, create new project and take endpoint + access key as below.

![Infura](./readme/infura.png)

Mnemonic 12 words based on [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) is to create your serial accounts on the Ethereum netowrk. If you use [MetaMask](https://metamask.io/) I believe you stored it somewhere. If not you should reinstall MetaMask or do something you can. :)

```sh
export RINKEBY_API='YOUR ENDPOINT URL'
export MNEMONIC='YOUR MNEMONIC 12 WORDS'
```

```sh
node deploy.js
Attempting to deploy from account 0x672b39F0D2609a6FeC23358f4b8D8c92104BAF56
Contract deployed to 0xc723165bf915453E5B4F3C7dD854703C74C393f1
```

After deployment you can check the contract address through [Etherscan](https://rinkeby.etherscan.io/address/0xc723165bf915453E5B4F3C7dD854703C74C393f1).

## Stye Guide Setting for Reference

I used style guide setting with Prettier + ESLint + Airbnb.

```sh
yarn add --dev eslint prettier eslint-config-airbnb-base eslint-plugin-import eslint-config-prettier eslint-plugin-prettier lint-staged husky
```

Create `.eslintrc.json`.

```sh
touch .eslintrc.json
```

Add this ESLint setting.

```json
{
  "extends": ["airbnb-base", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": ["error"]
  }
}
```

Create `.prettierrc`.

```sh
touch .prettierrc
```

```json
{
  "trailingComma": "es5",
  "printWidth": 100,
  "singleQuote": true
}
```

Add `"editor.formatOnSave": true` into user setting in VSCode.

Add precommit scripts into `package.json`.

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*.{js,css,md}": [
    "eslint",
    "git add"
  ]
},
```

- [How to set up ES Lint for Airbnb, Vue JS, and VS Code](https://medium.com/@agm1984/how-to-set-up-es-lint-for-airbnb-vue-js-and-vs-code-a5ef5ac671e8)
- [Integrating Prettier + ESLint + Airbnb Style Guide in VSCode](https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a).
- [Setup ESLint and Prettier together for react and react-native projects in Visual Studio Code](https://medium.com/appstud/setup-eslint-and-prettier-together-for-react-and-react-native-projects-in-visual-studio-code-78772d58358d)
- [React/React-Native configure eslint (Airbnb), prettier and precommit with husky in one go for code quality](https://medium.com/innow8/react-react-native-configure-eslint-airbnb-prettier-and-precommit-with-husky-in-one-go-for-code-e89363e5f17f)
