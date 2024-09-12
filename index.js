var _ = require("underscore");
var fs = require("fs");
var { parse } = require("csv-parse")
var nameKey = new Map();

function drawNames(keynames) {
    let names = [];
    _.each(keynames, function(key) {
        let entryCount = nameKey.get(key);
        if(entryCount != undefined) {
            names.push(...new Array(entryCount).fill(key));
        } else {
            console.log('ERROR: could not find name ' + key);
        }
    })
    names = _.shuffle(names);
    let idx = Math.floor(Math.random()*names.length);
    return names[idx];
}

if (process.argv.length != 2) {
    console.error('Expected filename!');
    process.exit(1);
  }
const fileName = process.argv[2];