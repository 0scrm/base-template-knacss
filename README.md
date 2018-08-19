# base-template-knacss


Boilerplate SCSS based on [KNACSS](https://www.knacss.com/) template, using Gulp, Saas, Emmet & Yarn. Minimalist on purpose, for optimal modularity.

* Work directory  : `assets/scss/` 
* Build directory : `assets/css/`

## Installation

### Gulp

Visit [https://gulpjs.com/](https://gulpjs.com/)

### Sass

Visit the [sass-lang.com/install](http://sass-lang.com/install) to install Sass.

### Emmet

Visit the [emmet.io/download](https://emmet.io/download/) to add Emmet to your favorite IDE.

### Yarn

Visit [https://yarnpkg.com/docs/install](https://yarnpkg.com/docs/install/#mac-tab) to install Yarn dependency manager.

### Download the dependencies NPM

```bash
yarn install
```

## Usage 

### Build project
(Sass compilation)
```bash
gulp build
```

### Run project
Browser Sync & compilation on save (default task)
```bash
gulp
```

## How it works

The SCSS files are located in `/assets/scss`.
* **config/** : Default configuration files.
* **library/** : Default KNACSS librairies
* **vendor/** : Default third party plugins
* **components/** : Default KNACSS components 
Custom Sass folder :
* **template/** : User's variables & custom stylesheets