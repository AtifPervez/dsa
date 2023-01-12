var lengthOfLongestSubstring = function(s) {
    let max = 0;
     let start = 0;
     let set = new Set();
     for (let i = 0; i < s.length; i++){
         while(set.has(s[i])){
             set.delete(s[start]);
             start = start + 1;
         }
         set.add(s[i]);
         max = Math.max(max, i- start + 1)
     }
     return max;
     
 };

 let s = "pwwekb"
 console.log(lengthOfLongestSubstring(s));