var name= "abcdacda"


function isStringPalindrome(string) {
    for(var i=0;i< Math.floor(string.length/2);i++){
        console,log(string[i], string[string.length-1-i])
        if (string[i] !== string[string.length-1-i]) {
            return "Not Palindrome"
        }
    } 
     return "It Is A Palindrome"   
}
console.log(isStringPalindrome(name))