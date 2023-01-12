let s = "anagram"
let t = "nagarzm"
const anagram = (s, t) => {
    
    if (s.length != t.length) {

        return false
    }

    let map={}
    for(let i=0;i<s.length;i++){

        if(!map[s[i]]){
            map[s[i]]=0

            console.log(map);
    }
    map[s[i]]++
}

for(let j=0;j<t.length;j++){
    if(!map[t[j]]){
        return false

    }
    map[t[j]]--
    
    console.log(map);
}

return true
}
console.log(anagram(s, t));
    
    
    
    