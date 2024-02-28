// Semicoluns (;) can be skipped still works

const accountId = 1235787
let accountEmail = "shivkadam2042003@gmail.com"
var accountPass = "pass123" // var is not recommanded invokes problem in block scope and functional scope
accoutCity = "Pune"
let accountState // Prints undefined if no value provided

accountEmail = "example@gmail.com"
accountPass = "password007"
accountCity = "Delhi"

// accountId = 2; Constant cannot be changed after intialization

console.log(accountId)
console.log(accountEmail)
console.log(accountPass)
console.log(accountCity)

// Insted of writing console this many time just use console table
console.table([accountId, accountEmail, accountPass, accountCity, accountState])