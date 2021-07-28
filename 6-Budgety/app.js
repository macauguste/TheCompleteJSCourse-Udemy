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

    var DOMstrings = {
        inputType:'.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or expression
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    };
   
})();


//Global App Controller
var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMstrings();
    //Control additem function

    var ctrlAddItem = function() 
    {
        //1. Get input data from
        var input = UICtrl.getInput();
        console.log(input);
        //2. Add item to budget budgetController
    
        //3.Add Itme to UIController
    
        //4.Calculate Budget 

        //5.Display the Budget on the UI
    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

    document.addEventListener('keypress', function(keyEvent){
        if (keyEvent.keyCode === 13 || keyEvent.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);

