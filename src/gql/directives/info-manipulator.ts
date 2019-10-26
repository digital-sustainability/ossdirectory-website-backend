export function tinkerInfo(context, info) {

    if (!context.tinkered) {
        recursiveSelectionSet(info.operation.selectionSet);
    }
    context.tinkered = true;
}

function recursiveSelectionSet(selectionSet) {

    if (selectionSet && selectionSet.selections) {
        selectionSet.selections.forEach(element => {
            recursiveSelectionSet(element.selectionSet);
        });
        selectionSet.selections.push({kind: "Field", name: { kind: "Name", value: "_id"}});
    }
}
