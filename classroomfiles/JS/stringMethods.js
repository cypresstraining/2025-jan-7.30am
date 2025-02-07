//string is a primitive data type storing the text data 
//let string1="12abcdef"
let personName=" Ram prasad "
console.log("Actual name supplied :",personName)
let upperCaseName=personName.toUpperCase()
console.log("Name conveted to upper cases:",upperCaseName)
console.log("Name conveted to lowe cases:",personName.toLowerCase())
console.log("lenght of string:",personName.length)
console.log("char at 5th index:",personName.charAt(5))
console.log("Repeat the copies",personName.repeat(1))
console.log("concating the string to the actual string",personName.concat("Automation tester"))
console.log("remove spaces at both ends",personName.trim())
console.log("remove at starting point",personName.trimStart())
console.log("remove space at end :",personName.trimEnd())
console.log("last index of sad",personName.lastIndexOf('sad'))
console.log('index of a :',personName.indexOf('a'))
console.log("included sad ",personName.includes('sad'))
console.log("ends with sad ",personName.endsWith('sad '))
console.log(personName.replace("sad",' NO '))
console.log(personName.replaceAll('a','b'))
console.log(personName.slice(1,5).trimEnd().toLowerCase())
console.log(personName.trim().split(" "))
const currentDate=new Date()
console.log(currentDate)//default date it is printed 
console.log(currentDate.toString())//converted your date into string format
console.log("current day is :",currentDate.toString().split(" ").includes('GMT+0530'))