/***
Write an implementation of an alphanumeric sort. In this case, we should sort numbers first,
followed by lowercase letters, uppercase letters and then all other characters. The special case
here is that if any two numerical characters are next to each other, then they will be treated as
one numeric value. The following example has a sample input with the expected output.
 */

function alphanumericSort(input) {
    // Validate input
    if (typeof input !== 'string' || input.length === 0) {
        throw new Error('Input must be a non-empty string.');
    }

    // Categorize characters into numbers, lowercase, uppercase, and others
    const categories = {
        numbers: [],
        lowercase: [],
        uppercase: [],
        others: [],
    };

    let currentNumber = '';

    // Iterate over each character to categorize
    for (const char of input) {
        if (char >= '0' && char <= '9') {
            // Group consecutive numeric characters together
            currentNumber += char;
        } else {
            // Add any accumulated number to the numbers category
            if (currentNumber) {
                categories.numbers.push(Number(currentNumber));
                currentNumber = '';
            }

            if (char >= 'a' && char <= 'z') {
                categories.lowercase.push(char);
            } else if (char >= 'A' && char <= 'Z') {
                categories.uppercase.push(char);
            } else {
                categories.others.push(char);
            }
        }
    }

    // Push the last accumulated number, if any
    if (currentNumber) {
        categories.numbers.push(Number(currentNumber));
    }

    // Sort each category
    categories.numbers.sort((a, b) => a - b);
    categories.lowercase.sort();
    categories.uppercase.sort();
    categories.others.sort();

    // Concatenate the sorted results
    return [
        categories.numbers.join(''),
        ...categories.lowercase,
        ...categories.uppercase,
        ...categories.others,
    ].join('');
}

// Accept input string from command-line arguments
const input = process.argv[2];

if (!input) {
    console.error('Error: Please provide a string to sort.');
    console.log('Usage: node alphanumeric-sort.js "string_to_sort"');
    process.exit(1);
}

try {
    const output = alphanumericSort(input);
    console.log(`Input: ${input}`);
    console.log(`Sorted Output: ${output}`);
} catch (error) {
    console.error(`Error: ${error.message}`);
}
