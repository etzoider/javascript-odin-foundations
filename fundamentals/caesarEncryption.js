//function ceasarCipher(String word, Number n) : (String encryptedWord)

// ceasar('abc', n = 2) >>>>   shifts each letter N times to the right of the alphabet. 'a' would become 'c', 'b' would become
// 'd' and so on...



function caesar(word, n) {
    let res = ''; let currChar;
    for (i=0;i<word.length;i++) {
        let currChar = word[i];
        let encryptedChar = (String.fromCharCode(currChar.charCodeAt() + (n%26)));
        res += encryptedChar;
    }
    return res;
}

let res = caesar('Mjqqt, Btwqi!', -5);




console.log(res);