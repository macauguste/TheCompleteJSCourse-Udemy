///Project 1


////UI MODULES
//get input values
//add new item to UI
//update UI

////Data Module
//add new item to data sctructure
//calculate budget 

////Controller Module
//add event handlers

var budgetController = (function () {

     var x = 23;

     var add = function (a) {
         return x + a;
     }

     return {
         publicTest: function(b){
             return add(b);
         }
     }

})();

var UIController = (function () {

})();

var controller = (function (budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function(){
            console.log(z);
        }
    }

})(budgetController, UIController);