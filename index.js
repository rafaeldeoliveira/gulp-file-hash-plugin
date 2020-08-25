const through = require('through2'); 
const md5 = require('md5');
const File = require('vinyl');
const PluginError = require('plugin-error');

const PLUGIN_NAME = 'gulp-hash-file';

const defaultOptions = {
    hashFileExtension: 'hash'
};

module.exports = function(options = {}) {

    options = {...defaultOptions, ...options};

    return through.obj(function(file, encoding, callback) {
        this.push(file);
        if(file.isBuffer()) {
            const hashFile = new File({
                cwd: file.cwd,
                base: file.base,
                path: file.path + '.' + options.hashFileExtension,
                contents: Buffer.from(md5(file.contents))
            })
            this.push(hashFile);

        } else {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams not supported!'));
        }
        callback();
    });

};