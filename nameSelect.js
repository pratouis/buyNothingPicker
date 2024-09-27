const { uniq } = import('underscore');
const { duplicateName, noName } = import('./strings.json');

const addNames = ((nameMap, names) => {
    names.forEach((nameVal) => {
        if (nameMap.has(nameVal)) {
            throw new Error(duplicateName);
        } else {
            nameMap.set(nameVal, []);
        }
    });
});

const addItems = ((nameMap, nameKey, items) => {
    if (nameMap.has(nameKey)) {
        const currItems = nameMap.get(nameKey);
        // TODO: improved efficiency
        const newItems = [...currItems, ...items];
        nameMap.set(nameKey, uniq(newItems));
    } else {
        throw new Error(noName);
    }
});

const pickNameForItem = ((nameMap, itemNo) => {
    
});

module.exports = {
    addItems,
    addNames,
    pickNameForItem
};