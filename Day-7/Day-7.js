// Pallindrome

var array="abcdsnodba"


function isStringPalindrome(string){

        for(var i=0;i<=Math.floor(string.length/2);i++){

              if(string[i] !== string[string.length-1-i]){

                return "Its Not Palindrome"
              }
        }

        return"Its A Palindrome"

}

console.log(isStringPalindrome(array))