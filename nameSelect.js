var { uniq } = import('underscore');
import { duplicateNam, noName } from './strings';

export const addNames = ((nameMap, names) => {
    names.forEach((nameVal) => {
        if (nameMap.has(nameVal)) {
            throw new Error(duplicateName);
        } else {
            nameMap.set(nameVal, []);
        }
    });
});

export const addItems = ((nameMap, nameKey, items) => {
    if (nameMap.has(nameKey)) {
        const currItems = nameMap.get(nameKey);
        // TODO: improved efficiency
        const newItems = [...currItems, ...items];
        nameMap.set(nameKey, uniq(newItems));
    } else {
        throw new Error(noName);
    }
});

export const pickNameForItem = ((nameMap, itemNo) => {
    
});