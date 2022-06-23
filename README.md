<div align="center">
  <br>
  <br>
  <p>
    <b>argv-user-input</b>
  </p>
  <p>
     <i>Tiny function who parse user data from CLI</i>
  </p>
  <p>

[![NPM version](https://img.shields.io/npm/v/argv-user-input?style=flat-square)](https://img.shields.io/npm/v/argv-user-input?style=flat-square)
[![Package size](https://img.shields.io/bundlephobia/min/argv-user-input)](https://img.shields.io/bundlephobia/min/argv-user-input)
[![Dependencies](https://img.shields.io/david/luctst/argv-user-input.svg?style=popout-square)](https://david-dm.org/luctst/argv-user-input)
[![devDependencies Status](https://david-dm.org/luctst/argv-user-input/dev-status.svg?style=flat-square)](https://david-dm.org/luctst/argv-user-input?type=dev)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

  </p>
</div>

---

**Content**

* [Features](##features)
* [Install](##install)
* [Usage](##usage)
* [Contributing](##contributing)
* [Maintainers](##maintainers)

## Features ✨
* Parse, split commands and options entry by user.
* Return simple object.

## Install 🐙
```
npm i argv-user-input
```

## Usage 💡
```js
#!/usr/bin/env node
import parseArgvData from 'argv-user-input';
const argvs = parseArgvData();
```
*foo.js*


### With no commands or options.
```
$ foo.js 
```
```js
console.log(argvs);
/*
{
  commands: [],
  options: {},
}
*/
```

### With commands and no option.
```
$ foo.js start test
```
```js
console.log(argvs);
/*
{
  commands: ['start', 'test'],
  options: {},
}
*/
```

### With commands and options.
```
$ foo.js start test --skip -p ./dev
```
```js
console.log(argvs);
/*
{
  commands: ['start', 'test'],
  options: {
    skip: true,
    p: './dev'
  },
}
*/
```

### With option and no command.
```
$ foo.js --name=foo
```
```js
console.log(argvs);
/*
{
  commands: [],
  options: {
    name: 'foo'
  },
}
*/
```

## Contributing 🍰
Please make sure to read the [Contributing Guide]() before making a pull request.
Thank you to all the people who already contributed to this project!

## Maintainers 👷
List of maintainers, replace all `href`, `src` attributes by your maintainers datas.
<table>
  <tr>
    <td align="center"><a href="https://lucastostee.now.sh/"><img src="https://avatars3.githubusercontent.com/u/22588842?s=460&v=4" width="100px;" alt="Tostee Lucas"/><br /><sub><b>Tostee Lucas</b></sub></a><br /><a href="#" title="Code">💻</a></td>
  </tr>
</table>

## License ⚖️
@MIT

---
<div align="center">
	<b>
		<a href="https://www.npmjs.com/package/get-good-readme">File generated with get-good-readme module</a>
	</b>
</div>
