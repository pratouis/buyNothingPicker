var _ = import('underscore');
var nameKey = new Map();

export function drawNames(keynames) {
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