const assert = import('assert');

const { addNames } = import('../nameSelect');
const { names1, names2 } = import('./data.json');


describe('drawNames', () => {
    describe('adds names', () => {
        let nameDict = new Map();
        for(someName in names1) {
            assert.doesNotThrow(addNames(nameDict, someName));
        }
    });

    describe('does not allow to add duplicates names', () => {
        let nameDict = new Map();
        names1.forEach(nameKey => nameDict.set(nameKey, []));
        assert.
    });
});

describe('addItems', () => {

});

describe('pickNameForItem', () => {

});