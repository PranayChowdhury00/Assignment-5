//current balance i have
let balanceHaveNow = document.getElementById('balance');
//donation button
let donationButton = document.getElementById('donation');
//History button
let historyButton = document.getElementById('history');


//common function
function balanceSet(b,input){
    let   balanceHaveNowText = parseFloat( b.innerText);

    let nowBalanceHave = balanceHaveNowText - input;
    balanceHaveNow.innerText = nowBalanceHave;
}

//common function 2
function sum(first,second,donatHaveInCard){
    let sumOfTwo = first+second;
    donatHaveInCard.innerText = sumOfTwo;
    

}
//

//noakhaliDonate
let noakhaliDonateHave = document.getElementById('noakhaliDonate');
let noakhaliInputId = document.getElementById('noakhaliInput');
let noakhaliDonateButton = document.getElementById('noakhaliDonateBtn');
let myModal1 = document.getElementById('my_modal');

noakhaliDonateButton.addEventListener('click',function(){
    
    let noakhaliInputIdValue =parseFloat( noakhaliInputId.value);
   
    if( noakhaliInputIdValue > 0 && !isNaN(noakhaliInputIdValue) ){
        myModal1.showModal();
       
        let noakhaliDonateHaveText =parseFloat( noakhaliDonateHave.innerText);
    // let totalNokhaliHave= noakhaliDonateHaveText + noakhaliInputIdValue;
    // noakhaliDonateHave.innerText = totalNokhaliHave;
    sum(noakhaliDonateHaveText,noakhaliInputIdValue,noakhaliDonateHave);

   
    balanceSet(balanceHaveNow,noakhaliInputIdValue);
    let div = document.createElement('div');
    div.className = 'max-w-screen-lg mx-auto shadow-2xl w-full h-24 rounded-lg p-4 mt-5';
    div.innerHTML = `
    <h1 class="text-[20px] font-semibold text-[#111111]">${noakhaliInputIdValue} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h1>
    <p class="text-[16px] font-normal text-gray-400">Date:${new Date().toLocaleDateString()} (Bangladesh Standard Time)</p>
    `;
   let historyOfNoakhalibonna =  document.getElementById('historyOfNoakhali')
    historyOfNoakhalibonna.insertBefore(div,historyOfNoakhalibonna.firstChild);
    
    }
    else{
        
        // myModal1.close();
        alert('invalid input');
    }

    noakhaliInputId.value = '';
})
// noakhali done

//feni start
let feniInputs = document.getElementById('feniInput');
let feniSubmitButton = document.getElementById('feniSubmitBtn');
let feniDonetedMoney = document.getElementById('feniDoneteMoney');
let myModal2=document.getElementById('my_modal_2');

feniSubmitButton.addEventListener('click',function(){
    let feniInputsValue = parseFloat( feniInputs.value);
    if(feniInputsValue >0 && !isNaN(feniInputsValue) ){
        myModal2.showModal();
    let feniDonetedMoneyHave =parseFloat( feniDonetedMoney.innerText);  
    sum(feniDonetedMoneyHave,feniInputsValue,feniDonetedMoney);
    balanceSet(balanceHaveNow,feniInputsValue);
    let div = document.createElement('div');
    div.className = 'max-w-screen-lg mx-auto shadow-2xl w-full h-24 rounded-lg p-4 mt-5';
       div.innerHTML = `
       <h1 class="text-[20px] font-semibold text-[#111111]">${feniInputsValue} Taka is Donated for famine-2024 at feni, Bangladesh</h1>
       <p class="text-[16px] font-normal text-gray-400">Date:${new Date().toLocaleDateString()} (Bangladesh Standard Time)</p>
       `;
      let historyOfFeniBonna =  document.getElementById('historyOfFeni')
      historyOfFeniBonna.insertBefore(div,historyOfFeniBonna.firstChild);
    }
    else{
        myModal2.close();
        alert('invalid input')
    }
      feniInputs.value ='';

})
// feni end

//freedom fighter  start


let freedomFighterBtn  = document.getElementById('freedomfighterBtn');
let myModal3 = document.getElementById('my_modal_3')
freedomFighterBtn.addEventListener('click',function(){
    let freedomFighterInput =parseFloat( document.getElementById('freedomfighterInput').value);
    if(freedomFighterInput>0 && !isNaN(freedomFighterInput )){
        myModal3.showModal();
    let freedomFighterHaveMoney =parseFloat( document.getElementById('freedomfighterhavemoney').innerText);
    let freedomfighterhavemoneyIn = document.getElementById('freedomfighterhavemoney')
    sum(freedomFighterHaveMoney,freedomFighterInput,freedomfighterhavemoneyIn)
    balanceSet(balanceHaveNow,freedomFighterInput);
    
     let div = document.createElement('div');
     div.className = 'max-w-screen-lg mx-auto shadow-2xl w-full h-24 rounded-lg p-4 mt-5';
        div.innerHTML = `
        <h1 class="text-[20px] font-semibold text-[#111111]">${freedomFighterInput} Taka is Donated for famine-2024 at quta,</h1>
        <p class="text-[16px] font-normal text-gray-400">Date:${new Date().toLocaleDateString()} (Bangladesh Standard Time)</p>
        `;
       let historyOfFreedomFighter =  document.getElementById('historyOfFreedomFighter')
       historyOfFreedomFighter.insertBefore(div,historyOfFreedomFighter.firstChild);
    }
        else{
            myModal3.close();
            alert('invalid input')
        }
    
       document.getElementById('freedomfighterInput').value ='';
   
})

// end


// history

historyButton.addEventListener('click',function(){
    let history = document.getElementById('history');
    history.classList.add ('bg-[#B4F461]','text-[#111111]');
    history.classList.remove('border-2','border-gray-400');

    donationButton.classList.add('border-2','border-gray-400');
    donationButton.classList.remove ('bg-[#B4F461]','text-[#111111]');

    document.getElementById('allCard').classList.add('hidden');

    document.getElementById('historyOfNoakhali').classList.remove('hidden');
    document.getElementById('historyOfFeni').classList.remove('hidden');
    document.getElementById('historyOfFreedomFighter').classList.remove('hidden');
})


donationButton.addEventListener('click',function(){
    let donationButtonNew = document.getElementById('donation');

    donationButtonNew.classList.add ('bg-[#B4F461]','text-[#111111]');
    donationButtonNew.classList.remove('border-2','border-gray-400');

    let historyButton = document.getElementById('history');
    historyButton.classList.add('border-2','border-gray-400');
    historyButton.classList.remove ('bg-[#B4F461]','text-[#111111]');

    document.getElementById('allCard').classList.remove('hidden');

    document.getElementById('historyOfNoakhali').classList.add('hidden');
    document.getElementById('historyOfFeni').classList.add('hidden');
    document.getElementById('historyOfFreedomFighter').classList.add('hidden');
})



//////


 