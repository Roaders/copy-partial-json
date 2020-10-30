# copy-partial-json

 > A simple script to copy portions of a json document from one file to another

![npm](https://img.shields.io/npm/v/copy-partial-json)
[![Build Status](https://travis-ci.com/Roaders/copy-partial-json.svg?branch=master)](https://travis-ci.com/Roaders/copy-partial-json)
![NPM](https://img.shields.io/npm/l/copy-partial-json)
![Typescript](https://img.shields.io/badge/types-TypeScript-blue)
[![codecov](https://codecov.io/gh/Roaders/copy-partial-json/branch/master/graph/badge.svg?token=06AMYJTIUK)](https://codecov.io/gh/Roaders/copy-partial-json/)

## WORK IN PROGRESS

To copy the version, name and dependency list from a root package.json to child packages:

```bash
$ copy-partial-json -s package.json -t childOne/package.json -t childTwo/package.json -k version,name,dependencies
```

Using npm scripts this can be done automatically when `npm version` is run:

```json
{
    "scripts": {
        "version": "copy-partial-json -s package.json -t childOne/package.json -t childTwo/package.json -k version,name,dependencies"
    }
}
```

[//]: ####ts-command-line-args_write-markdown_replaceBelow  

## Options

| Argument | Alias | Type | Description |
|-|-|-|-|
| **sourceFile** | **s** | string | The json file to copy from |
| **targetFile** | **t** | string[] | The json file to copy to |
| **keys** | **k** | string[] | The keys to copy. For example, 'version,name,dependencies' |
| **help** | **h** | boolean | Show this help text |

[//]: ####ts-command-line-args_write-markdown_replaceAbove  