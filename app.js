var btn1 = document.getElementById("Btn1");
var btn2 = document.getElementById("Btn2");
var btn3 = document.getElementById("Btn3");
var response1 = document.getElementById("Response");
var response2 = document.getElementById("Response2");
var response3 = document.getElementById("Response3");
var favoriteDeserts = ["apple pie", "snickers bar", "ice cream"];
var favoriteFoods = ["Steak", "Shrimp", "Meatbal Subs"];
var favoriteGames = ["Half Life 2", "Portal 2", "Destiny"];
var i;

btn1.addEventListener("click", function(){
    response1.innerHTML = " -(Look in console)- ";
    console.log("---------DESERTS-----------")
    for(i=0;i<3;i++){
    console.log(favoriteDeserts[i]);
    }
});
btn2.addEventListener("click", function(){
    response2.innerHTML = " -(Look in console)- ";
    console.log("---------FOOD-----------")
    for(i=0;i<3;i++){
    console.log(favoriteFoods[i]);
};
});
btn3.addEventListener("click", function(){
    response3.innerHTML = " -(Look in console)- ";
    console.log("---------GAMES-----------")
    for(i=0;i<3;i++){
    console.log(favoriteGames[i]);
};
});