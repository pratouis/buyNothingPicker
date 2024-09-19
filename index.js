var _ = require("underscore");
var fs = require("fs");
var { parse } = require("csv-parse")
var { drawNames } = require("./nameSelect");
var nameKey = new Map();

if (process.argv.length != 2) {
    console.error('Expected filename!');
    process.exit(1);
  }
const fileName = process.argv[2];