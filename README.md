# About
This plugins emits an additional file named `[file].hash` containing an MD5 hash for each files in the stream.


# Usage

`yarn add -D gulp-hash-file-plugin`

```js
const { task, dest } = require('gulp');
const hash = require('gulp-hash-file-plugin');

function myTask() {
    return src(files)
            .pipe(...)
            .pipe(hash())
            .pipe(dest(output));
}

exports.myTask = myTask;
```

Example output files:
- fileA.js
- fileA.js.hash 
- fileB.js
- fileB.js.hash 

# Options 

|Name|Description|Default|
|-----|----------|-----|
|`hashFileExtension`|Extension of the generated hash file|`hash`|



