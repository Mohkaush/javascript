const accountId = 30020571
let accountEmail = "moh@gmail.com"
var accountPassword = "12345"   // prefer not to use var :-  becoz of issue in block scope and functional
accountCity = "Mathura" // not a good way to declare a variable like this
let accountState; // undefined

// accountId = 39900232  can not update a const variable
accountEmail = "kaushik@gmail.com"
accountPassword = "54321"
accountCity = "Banglore"

// console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

