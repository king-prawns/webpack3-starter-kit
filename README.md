# extreme-scaffolding

Webpack 3 with Webpack Dev Server Configuration.

## Installation

* Install Node.js

Go to [Node website](https://nodejs.org/en/)

* Install Yarn
  (npm should work as well)

Go to [Yarn website](https://yarnpkg.com/en/docs/install#mac-tab)

## Usage

* Clone this repository

git clone https://github.com/king-prawns/extreme-scaffolding.git [your-app-name]
Remove the .git folder and change details within:

```
package.json
src/manifest.json
```

* Install dependencies

```
$ cd my-project
$ yarn
```

* Development

```
$ yarn dev
```

Then your browser will be opened automagically

* Test

```
$ cd my-project
$ yarn test
```

* Production

```
$ yarn build
```

Install [http-server](https://github.com/indexzero/http-server)

A command-line http server

```
$ yarn global add http-server
```

then

```
$ cd my-project\dist
http-server -o
```

## Features

* [Webpack 3](https://github.com/webpack/webpack)
* [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
* [HMR](https://webpack.js.org/concepts/hot-module-replacement/)
* [Babel](https://babeljs.io/)
* [EsLint](https://eslint.org/docs/user-guide/getting-started)
* [StyleLint](https://github.com/stylelint/stylelint)
* [Sass](https://github.com/webpack-contrib/sass-loader)
* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [Ava](https://github.com/avajs/ava)
* [nyc](https://github.com/istanbuljs/nyc)
* Webpack Plugins: Html, Copy, ExtractText, Define, UglifyJS, CommonsChunk
