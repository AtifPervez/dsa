// 1456. Maximum Number of Vowels in a Substring of Given Length
let s = "abciiidef"
let k = 3
// a, e, i, o,u => vowels

const vowel = (ch) => {
    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
        return true
    }
    return false
}
const maxVowels = (s, k) => {
    let count = 0
    let maxCount = 0
    for (let i = 0; i < k; i++) {
        if (vowel(s[i])) {
            count++
        }
    }
    maxCount = Math.max(maxCount, count)

    for (let i = k; i < s.length; i++) {
        if (vowel(s[i - k])) {
            count--
        }
        if(vowel(s[i])) {
            count++
        }
        maxCount=Math.max(maxCount,count)
    }
    return maxCount
   
}
let res = maxVowels(s, k)
console.log(res);




