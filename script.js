

//This code will show on console

function reverseString(str){
    const originalString = str.replace(/\s+/g, '');
    const reversedString = originalString.split("").reverse().join("");
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;

    for (let i = 0 ; i< originalString.length; i++){
        if (vowels.includes(originalString[i])){
            vowelCount++;  //console  (is shows in console)
        }
    }
    console.log(`reversed String : ${reversedString}`);
console.log(`vowel Count: ${vowelCount}`);
var vowelCounts = document.getElementById("vowelCounts").textContent = `${vowelCount}`
}


reverseString("Future world.");


//This js code for the HTML file for the user 

const input = document.getElementById("input");
const output = document.getElementById("output");
const vowelCounts = document.getElementById("vowelCounts");

input.addEventListener("input", () => {

    const reversed = input.value.replace(/\s+/g, '').split("").reverse().join("");
    output.dataset.output = reversed;
    console.warn(`Confirmed By Future Res: ${reversed}` );  

});


  function reverseStringAndCountVowels(str) {
    // Check for empty string or string containing only spaces
    if (!str.trim()) {
      return { reversedString: "", vowelCount: 0 };
    }
  
    const vowels = new Set("aeiouAEIOU");
    const originalString = str.replace(/\s+/g, "");
    const reversedString = originalString.split("").reverse().join("");
    let vowelCount = 0;
  
    for (const char of originalString) {
      if (vowels.has(char)) {
        vowelCount++;
      }
    }
  
    return { reversedString, vowelCount };
  }

  //I try to print the vowelCount to html i dont know how to make it read the text input it there.