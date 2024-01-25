function isPalindrome(str) {
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    for (let i = 0, j = cleanStr.length - 1; i < j; i++, j--) {
        if (cleanStr[i] !== cleanStr[j]) {
            return false;
        }
    }
    
    return true;
}

// Example usage:
console.log(isPalindrome('A man, a plan, a canal, Panama')); // true
console.log(isPalindrome('hello world')); // false
