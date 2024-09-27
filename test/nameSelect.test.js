const { addNames } = require('../nameSelect');
const { names1, names2 } = import('./data.json');

const assert = require('assert');

describe('drawNames', () => {
    describe('adds names', () => {
        nameDict = new Map();
        for(someName in names1) {
            assert.doesNotThrow(addNames(nameDict, someName));
        }
    });

    describe('does not allow to add duplicates names', () => {

    });
});

describe('addItems', () => {

});

describe('pickNameForItem', () => {

});