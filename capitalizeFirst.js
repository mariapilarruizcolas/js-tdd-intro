// capitalizeFirst.js


// WRITE THE ACTUAL FUNCTION HERE

// function capitalizeFirst(input) {
//     let output = '';
//     for (let i = 0; i < input.length; i++) {
//         if (i === 0) {
//             output += input[0].toUpperCase();
//         } else {
//             output += input[i];
//         }
//     }
//     return output;
// }
//VERSION AMELIORE DU CODE
function capitalizeFirst(input) {
    return input.length > 0
        ? input[0].toUpperCase() + input.slice(1)
        : '';
}
module.exports = capitalizeFirst;
