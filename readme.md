# flat-zip [![][badge-gzip]][link-bundlephobia]

[badge-gzip]: https://img.shields.io/bundlephobia/minzip/flat-zip.svg?label=gzipped
[link-bundlephobia]: https://bundlephobia.com/result?p=flat-zip

> Concats arrays but does so like a zipper instead of appending them. Like lodash.zip + lodash.flat, plus a length limit

## Install

```sh
npm install flat-zip
```

```js
import {flatZip} from 'flat-zip';
```

```js
const {flatZip} = require('flat-zip');
```

## Usage

```js
flatZip([
	['a', 'b', 'c'],
	['€', '฿'],
	[100, 200, 300, 400, 500],
]);
// -> ['a', '€', 100, 'b', '฿', 200, 'c', 300, 400, 500]
```
With a length limit:
```js
flatZip([
	['a', 'b', 'c'],
	['€', '฿'],
	[100, 200, 300, 400, 500],
], 4);
// -> ['a', '€', 100, 'b']
```

## License

MIT © [Federico Brigante](https://bfred.it)
