// capitalizeFirstLetters.js
const assert = require('assert');

// // WRITE THE ACTUAL FUNCTION HERE

function capitalizerFirstLetters(input) {
    let output = '';
    if (input != "") {
        let array = [];
        output = input.split(' ');
        output.forEach(word => {
            let firstLetter = word[0].charAt(0).toUpperCase();
            let replacement = word.replace(word.charAt(0), firstLetter);
            array.push(replacement);
        });
        output = array.join(' ');

    }
    return output;
}

// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizerFirstLetters, 'function');

// Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizerFirstLetters.length, 1);


// Check that capitalizeFirstLetters transforms javaScript is a perfect language correctly
assert.strictEqual(capitalizerFirstLetters('javaScript is a perfect language'), 'JavaScript Is A Perfect Language');
// Check that capitalizeFirstLetters transforms javaScript correctly
assert.strictEqual(capitalizerFirstLetters('javaScript'), 'JavaScript');

// Check that it works for a 1-character string
assert.strictEqual(capitalizerFirstLetters('z'), 'Z');

// Check that it works for an empty string
assert.strictEqual(capitalizerFirstLetters(''), '');