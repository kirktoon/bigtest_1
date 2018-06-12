var bankBalance = 500;

//function makeTransaction(priceofItem) {
//    if (priceofItem <= bankBalance) {
//        bankBalance -= priceofItem;
//        console.log("Success!");
//    } else {
//        console.log("Nope");
//    }
//}
//console.log(bankBalance);
//makeTransaction(79.89);
//console.log(bankBalance);
//makeTransaction(2.36);
//console.log(bankBalance);
//makeTransaction(10.45);
//console.log(bankBalance);
//makeTransaction(420.00);
//console.log(bankBalance);

var transFunction = function(priceofItem) {
        if (priceofItem <= bankBalance) {
        bankBalance -= priceofItem;
        console.log("Success!");
    } else {
        console.log("Nope");
    }
};

//transFunction(499);


