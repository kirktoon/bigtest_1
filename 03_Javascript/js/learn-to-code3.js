var cat1 = 5;
var cat2 = 10;
var cat3 = 1;
var discat3 = true;

if ((cat1 > cat2 && cat1 > cat3) && !discat3) {
   console.log("Cat 1 is the cutest!");
} else if ((cat2 > cat1 && cat2 > cat3) && !discat3) {
   console.log("Cat 2 is the cutest!");
} else if ((cat3 > cat1 && cat3 > cat2) || discat3) {
   console.log("Cat 3 is the cutest!");
}
