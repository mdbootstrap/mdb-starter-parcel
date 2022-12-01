![MDB Logo](https://mdbootstrap.com/img/Marketing/general/logo/medium/mdb-r.png)

# MDB 5 Parcel Starter

### Parcel boilerplate for Bootstrap 5 & Material Design 2.0 UI Kit

**[>> Support MDB 5 with a STAR](https://github.com/mdbootstrap/mdb-ui-kit/)**

**[>> MDB 5 Demo](https://mdbootstrap.com/docs/standard/#demo)**

<a href="https://npmcharts.com/compare/mdbootstrap?minimal=true"> <img src="https://img.shields.io/npm/dm/mdbootstrap.svg?label=MDB%20Downloads" alt="Downloads"></a>
<a href="https://github.com/mdbootstrap/bootstrap-material-design/blob/master/License.pdf"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License"></a>
<a href="https://twitter.com/intent/tweet/?text=Thanks+@mdbootstrap+for+creating+amazing+and+free+Material+Design+for+Bootstrap+4+UI+KIT%20https://mdbootstrap.com/docs/jquery/&hashtags=javascript,code,webdesign,bootstrap"><img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social&label=Let%20us%20know%20you%20were%20here%21&"></a>
<a href="https://www.youtube.com/watch?v=c9B4TPnak1A&t=6s"><img alt="YouTube Video Views" src="https://img.shields.io/youtube/views/c9B4TPnak1A?label=Bootstrap%205%20Tutorial%20Views&style=social"></a>

___

> :warning: The use of this Starter is at your own risk and assumes basic knowledge of Parcel, JavaScript and CSS preprocessors. We recommend creating custom versions of MDB UI KIT and themes only for advanced developers.

___

### Installation
```
npm install
```

> **Pro Essential installation**
> ```
> npm install git+https://oauth2:ACCESS_TOKEN@git.mdbootstrap.com/mdb/standard/mdb-ui-kit-pro-essential
> ```

> **Pro Advanced installation**
> ```
> npm install git+https://oauth2:ACCESS_TOKEN@git.mdbootstrap.com/mdb/standard/mdb-ui-kit-pro-advanced
> ```

### Dev Server
```
npm run start
```

### Build
```
npm run build
```

### Features:

* Bundling via [Parcel](https://github.com/parcel-bundler/parcel) v2.7.0
* SASS Support via [@parcel/transformer-sass](https://www.npmjs.com/package/@parcel/transformer-sass) v2.7.0
* Linting via [@parcel/validator-eslint](https://www.npmjs.com/package/@parcel/validator-eslint) v2.7.0
* Unit Testing via [jest](https://github.com/facebook/jest) v29.0.1
* Code Formatting via [prettier](https://github.com/prettier/prettier) v2.7.1

### Files structure:

```
my-project/
└── src/
    │
    ├── js/
    │   └── main.js
    ├── scss/
    │   └── styles.scss
    │
    ├── .parcelrc
    │
    └── index.html

```
<br><br>

___

# MDB UI KIT - Importing of MDB files

### Importing JS modules
You can import the entire library or just individual modules:
```
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit/src/mdb/js/free/input'; // module
import { Input as CustomInput } from 'mdb-ui-kit/src/mdb/js/free/input'; // module with custom name
```

### Importing CSS file
To import MDB stylesheet please use the following syntax:
```
@import '../../node_modules/mdb-ui-kit/css/mdb.min.css';
```
<br><br>
