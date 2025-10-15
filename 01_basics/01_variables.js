const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
let accountCity = "Jaipur";

// accountId = 2; // not allowed

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";
let accountState;

console.log(accountId);

/*
Perfer not to use var
because of issue in block cope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
