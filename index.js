function calculateTax(amount) {
    const taxRate = 0.10; // 10% tax
    return amount * taxRate;
}

function convertToUpperCase(text) {
    return text.convertToUpperCase();
}

function findMaximum(num1, num2) {
    return max(num1, num2);
}

function isPalindrome(word) {
// Remove non-alphanumeric characters and convert to lowercase
const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
// Compare the cleaned word with its reverse
return
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    return originalPrice - discountAmount;
}

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
