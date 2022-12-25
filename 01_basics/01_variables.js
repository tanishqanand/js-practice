const accountId = 123; // Its value cannot be changed
let accountEmail = "tanishq@google.com";
var accountPassword = "12345"; // Use let intead of var because of the block scope and functional scope problem
accountCity = "Jaipur"; // Not Recommended

let accountState;

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);