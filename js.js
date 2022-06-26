// button get 
let addBtn = document.getElementById("addBtn");
let drwBtn = document.getElementById("drwBtn");

// value get 
let addInput = document.getElementById("addInput");
let drwInput = document.getElementById("drwInput");

// for display
let dipositShowing = document.getElementById("dipositShowing");
let withdrawShowing = document.getElementById("withdrawShowing");
let consulatedBalanceShowing = document.getElementById("consulatedBalanceShowing");

//algoridm //

/////////////// deposit macanism /////////////
addBtn.addEventListener('click',()=>{
    let dipositPreviousValue = dipositShowing.innerText;
    let consulatedPreviousShow = consulatedBalanceShowing.innerText;
    let addInputValue = addInput.value;
    let finalDepositShow = parseInt(dipositPreviousValue) + parseInt(addInputValue) ;
    dipositShowing.innerText = finalDepositShow ;
    consulatedBalanceShowing.innerText = parseInt(consulatedPreviousShow) + parseInt(addInputValue) ;
    addInput.value = '';
    
})
/////////////// deposit macanism /////////////
drwBtn.addEventListener('click',()=>{
    let withdrawPreviousValue = withdrawShowing.innerText;
    let consulatedPreviousShow = consulatedBalanceShowing.innerText;
    let drwInputValue = drwInput.value;
    let finalDrawShow = parseInt(withdrawPreviousValue) + parseInt(drwInputValue) ;
    withdrawShowing.innerText = finalDrawShow ;
    consulatedBalanceShowing.innerText = parseInt(consulatedPreviousShow) - parseInt(drwInputValue) ;
    drwInput.value = '';
    
})