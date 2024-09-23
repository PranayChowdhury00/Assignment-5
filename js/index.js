//current balance i have
let balanceHaveNow = document.getElementById('balance');
//donation button
let donationButton = document.getElementById('donation');
//History button
let historyButton = document.getElementById('history');


//noakhaliDonate
let noakhaliDonateHave = document.getElementById('noakhaliDonate');
let noakhaliInputId = document.getElementById('noakhaliInput');
let noakhaliDonateButton = document.getElementById('noakhaliDonateBtn');

noakhaliDonateButton.addEventListener('click',function(){
    let noakhaliInputIdValue =parseFloat( noakhaliInputId.value);
    let noakhaliDonateHaveText =parseFloat( noakhaliDonateHave.innerText);
    let totalNokhaliHave= noakhaliDonateHaveText + noakhaliInputIdValue;
    noakhaliDonateHave.innerText = totalNokhaliHave;

  let   balanceHaveNowText = parseFloat( balanceHaveNow.innerText);
  
  let nowBalanceHave = balanceHaveNowText - noakhaliInputIdValue;
  balanceHaveNow.innerText = nowBalanceHave;
  

 let div = document.createElement('div');
 div.className = 'max-w-screen-lg mx-auto shadow-2xl w-full h-24 rounded-lg p-4 mt-5';
    div.innerHTML = `
    <h1 class="text-[20px] font-semibold text-[#111111]">${noakhaliInputIdValue} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h1>
    <p class="text-[16px] font-normal text-gray-400">Date:${new Date().toLocaleDateString()} (Bangladesh Standard Time)</p>
    `;
   let historyOfNoakhalibonna =  document.getElementById('historyOfNoakhali')
    historyOfNoakhalibonna.insertBefore(div,historyOfNoakhalibonna.firstChild);

    noakhaliInputId.value = '';

    
})
// noakhali done

//feni start
let feniInputs = document.getElementById('feniInput');
let feniSubmitButton = document.getElementById('feniSubmitBtn');
let feniDonetedMoney = document.getElementById('feniDoneteMoney');

feniSubmitButton.addEventListener('click',function(){
    let feniInputsValue = parseFloat( feniInputs.value);

    let feniDonetedMoneyHave =parseFloat( feniDonetedMoney.innerText);  

    let nowFneniHave = feniDonetedMoneyHave + feniInputsValue;
    console.log(nowFneniHave);
    feniDonetedMoney.innerText = nowFneniHave;

    let balanceHaveNowInAccount = parseFloat(balanceHaveNow.innerText);
   let nowBalance =  balanceHaveNowInAccount - feniInputsValue;

    balanceHaveNow.innerText = nowBalance;
    

    let div = document.createElement('div');
    div.className = 'max-w-screen-lg mx-auto shadow-2xl w-full h-24 rounded-lg p-4 mt-5';
       div.innerHTML = `
       <h1 class="text-[20px] font-semibold text-[#111111]">${feniInputsValue} Taka is Donated for famine-2024 at feni, Bangladesh</h1>
       <p class="text-[16px] font-normal text-gray-400">Date:${new Date().toLocaleDateString()} (Bangladesh Standard Time)</p>
       `;
      let historyOfFeniBonna =  document.getElementById('historyOfFeni')
      historyOfFeniBonna.insertBefore(div,historyOfFeniBonna.firstChild);

      feniInputs.value ='';

})
// feni end

//freedom fighter  start


let freedomFighterBtn  = document.getElementById('freedomfighterBtn');

freedomFighterBtn.addEventListener('click',function(){
    let freedomFighterHaveMoney =parseFloat( document.getElementById('freedomfighterhavemoney').innerText);


    let freedomFighterInput =parseFloat( document.getElementById('freedomfighterInput').value);

    let freedomFighterHaveMoneyNow = freedomFighterHaveMoney + freedomFighterInput;
  

    document.getElementById('freedomfighterhavemoney').innerText = freedomFighterHaveMoneyNow;

    let balanceHaveNowInAccount = parseFloat(balanceHaveNow.innerText);
    let nowBalance =  balanceHaveNowInAccount - freedomFighterInput ;
 
     balanceHaveNow.innerText = nowBalance;
    
     let div = document.createElement('div');
     div.className = 'max-w-screen-lg mx-auto shadow-2xl w-full h-24 rounded-lg p-4 mt-5';
        div.innerHTML = `
        <h1 class="text-[20px] font-semibold text-[#111111]">${freedomFighterInput} Taka is Donated for famine-2024 at quta,</h1>
        <p class="text-[16px] font-normal text-gray-400">Date:${new Date().toLocaleDateString()} (Bangladesh Standard Time)</p>
        `;
       let historyOfFreedomFighter =  document.getElementById('historyOfFreedomFighter')
       historyOfFreedomFighter.insertBefore(div,historyOfFreedomFighter.firstChild);

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