function calculateChangeArray(oldValues, newValues) {
    if (oldValues.length !== newValues.length) {
        return "Arrays must have the same length.";
    }
    const changes = [];
    for (let i = 0; i < oldValues.length; i++) {
        const oldValue = oldValues[i];
        const newValue = newValues[i];

        const absoluteChange = newValue - oldValue;
        const percentageChange = (oldValue === 0) ? "N/A" : ((absoluteChange / Math.abs(oldValue)) * 100).toFixed(2) + "%";

        changes.push({
            absoluteChange: absoluteChange,
            percentageChange: percentageChange
        });
    }

    return changes;
}
// Example data
const oldValues = [100, 120, 130, 110, 150];  // initial values
const newValues = [120, 130, 110, 150, 180];  // final values

// Calculate changes
const changes = calculateChangeArray(oldValues, newValues);

// Display results
for (let i = 0; i < changes.length; i++) {
    console.log(`Change for pair ${i + 1}:`);
    console.log(`  Absolute Change: ${changes[i].absoluteChange}`);
    console.log(`  Percentage Change: ${changes[i].percentageChange}`);
    console.log();
}

