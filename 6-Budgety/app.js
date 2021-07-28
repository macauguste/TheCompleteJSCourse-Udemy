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

//Budget Controller
var budgetController = (function () {


})();


//UI Controller
var UIController = (function () {

})();


//Global App Controller
var controller = (function (budgetCtrl, UICtrl) {

    //Control additem function

    var ctrlAddItem = function() 
    {
        //1. Get input data from
    
        //2. Add item to budget budgetController
    
        //3.Add Itme to UIController
    
        //4.Calculate Budget 

        //5.Display the Budget on the UI

        console.log('It works');
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)

    document.addEventListener('keypress', function(keyEvent){
        if (keyEvent.keyCode === 13 || keyEvent.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);

