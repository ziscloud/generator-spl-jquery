# generator-spl-jquery 

[![Build Status](https://travis-ci.org/se-novamedia-publicweb/generator-spl-jquery.png?branch=master)](https://travis-ci.org/se-novamedia-publicweb/generator-spl-jquery)


[![NPM](https://nodei.co/npm/generator-spl-jquery.png?downloads=true)](https://nodei.co/npm/generator-spl-jquery/)

[![Dependency Status](https://david-dm.org/se-novamedia-publicweb/generator-spl-jquery.svg?style=flat-square)](https://david-dm.org/se-novamedia-publicweb/generator-spl-jquery)
[![devDependency Status](https://david-dm.org/se-novamedia-publicweb/generator-spl-jquery/dev-status.svg?style=flat-square)](https://david-dm.org/se-novamedia-publicweb/generator-spl-jquery#info=devDependencies)
[![peerDependency Status](https://david-dm.org/se-novamedia-publicweb/generator-spl-jquery/peer-status.svg?style=flat-square)](https://david-dm.org/se-novamedia-publicweb/generator-spl-jquery#info=peerDependencies)


## Getting Started

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-spl-jquery from npm, run:

```
$ npm install -g generator-spl-jquery
```
Create directory for plugin

```
$ mkdir folder-name
$ cd folder-name
```

Finally, initiate the generator:

```
$ yo spl-jquery
```

Start test with
```
$ grunt watch:karma
$ grunt karma
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

## UMD (Universal Module Definition)
Read more about UMD here, [UMD](https://github.com/umdjs/umd)

```javascript
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'foo', 'bar'], factory);
    } else {
        // Browser globals
        factory(jQuery, foo, bar);
    }
}(function ($, foo, bar) {
    $.fn.myPlugin = function () {};
}));
```


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
