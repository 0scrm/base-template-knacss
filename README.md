# base-template-knacss


SASS boilerplate based on [KNACSS](https://github.com/alsacreations/KNACSS) template, using Gulp, Saas & Yarn. Minimalist on purpose, for a better modularity.

* Work directory  : `sass/` 
* Build directory : `css/`

## Installation requirements

### Gulp

Visit [https://gulpjs.com/](https://gulpjs.com/)

### Sass

Visit [sass-lang.com/install](http://sass-lang.com/install) to install Sass.

### Yarn

Visit [yarnpkg.com/docs/install](https://yarnpkg.com/docs/install/#mac-tab) to install Yarn dependency manager.

### Download the dependencies

```bash
yarn install
```

## Usage 

### Build project
Sass compilation + autoprefixer + minify
```bash
gulp build
```

### Run project
Browser Sync & **Build** on save (default task)
```bash
gulp
```

## How it works

The SASS files are located in `/sass`.
* `config/` : Default configuration files
* `library/` : Default KNACSS librairies
* `vendor/` : Default third party "plugins"
* `components/` : Default KNACSS components

Custom Sass folder :
* `template/` : User's variables & custom stylesheets

## What about creating your website using KNACSS ?

Even if KNACSS is super light and easy-to-use, you'll need to go trough the (small — but in French) [documentation](https://www.knacss.com/doc.html).

Then, you can either use the ready-to-use `knacss.css` file or work with the sass files.