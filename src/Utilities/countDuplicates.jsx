// create objet of items (key) and units (value) like a count
export function countDuplicates(data) {
    const itemsCount = {}
    data.forEach(item => {
        itemsCount[item] = itemsCount[item] +1 || 1 
    });
    return itemsCount
}