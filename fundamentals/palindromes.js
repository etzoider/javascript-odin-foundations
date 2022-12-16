// function isPalindrome(str word) : boolean

//  first approach == iterate from 0 to Math.floor(word.length/2) and 
//  compare word[i] == word[-i], if false: return false, if its all equal, return true

function isPalindrome(word) {
    word = word.replace(/[<>\[\].,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let n = Math.ceil(word.length/2);
    let char1;let char2;
    for (let i=0;i<n;i++) {
        char1 = word[i].toLowerCase();
        char2 = word[word.length - 1 - i].toLowerCase();
        if (char1 != char2) {
            return false;
        }
    }
    return true;
}



word = 'RaCe;][]CaR';


console.log(isPalindrome(word));