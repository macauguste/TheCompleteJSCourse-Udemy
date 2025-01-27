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
var budgetController = (function() {

    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function(type){
        var sum = 0;
        data.allItems[type].forEach(function(cur){
            sum = sum + cur.value;
        });
        data.totals[type] = sum;

    };

    var data = {
        allItems: {
            exp:[],
            inc:[]
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };

    return { 
        addItem: function(type, des, val) {
            var newItem, ID;

            //create new id
            if (data.allItems[type].length > 0) {
                    ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }else{
                ID = 0;
            }

            //creat new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            }else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            //push it into our data structure
            data.allItems[type].push(newItem);

            //Return the new element 
            return newItem;
        },

        deleteItem: function(type, id) {
            var ids, index;

            //loop over all elements
            ids = data.allItems[type].map(function(current) {
                return current.id;
            });

            index = ids.indexOf(id);

            if(index !== -1){
                data.allItems[type].splice(index, 1);
            }


        },
 
        calculateBudget: function(){

            //calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');

            //calculate the budget: income-expense
            data.budget = data.totals.inc - data.totals.exp;

            //calculate the percentage of the income we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100)
            }else{
                data.percentage = -1;
            }
        },

        getBudget: function(){
            return{
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage,
            }
        },

        testing: function() {
            console.log(data);
        },
    };

})();


//UI Controller
var UIController = (function () {

    var DOMstrings = {
        inputType:'.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container'
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or expression
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },

        addListItem: function(obj, type) {
            var html, newHtml;
            
            //Create Htlm String with placeholder tags

            if (type === 'inc'){
                element = DOMstrings.incomeContainer
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }else if (type === 'exp'){
                element = DOMstrings.expenseContainer
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
            
            //Replace placeholder tags with actual Data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
0
            //insert html into Dom
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        deleteListItem: function(selectorID){

            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el)
        },

        clearField: function() {
            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

            var fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, index, array){
                current.value = "";
            });
        },

        displayBudget: function(obj){

            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;
            document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage;

            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            }else{
                document.querySelector(DOMstrings.percentageLabel).textContent = '---'
            }
        },

        
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
   
})();


//Global App Controller
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();

        //Control additem function
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event){
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
        //delete item function
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    };

    var updateBudget = function() {

        //1. Calculate Budget 
        budgetCtrl.calculateBudget();

        //2. Return the budget
        var budget = budgetCtrl.getBudget();

        //3. Display budget in UI
        UICtrl.displayBudget(budget);   
    }; 

    var ctrlAddItem = function() {
        var input, newItem;
        
        //1. Get input data from
        input = UICtrl.getInput();
        
        if (input.description !== "" && !isNaN(input.value) && input.value > 0 ){
        //2. Add item to budget budgetController
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);  

        //3.Add item to UIController
        UICtrl.addListItem(newItem, input.type);

        //4. Clear the fields   
        UICtrl.clearField();

        //5.Calculate Budget
        updateBudget();
        }
        
        //6.Display the Budget on the UI
    };

    var ctrlDeleteItem = function(event) {
        var itemID, splitID, type, ID; 

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if (itemID) {
            //inc-1
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            //delete item from data structure
            budgetCtrl.deleteItem(type, ID);

            //delete item from interface
            UICtrl.deleteListItem(itemID)

            //update to show new budget
            updateBudget();
        }
    };


    return {
        init: function() {
            console.log('Application has started.');
            UICtrl.displayBudget({budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1,});
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();