const com_choice = document.getElementById('computer_choice');
const usr_choice = document.getElementById('user_choice');
const res = document.getElementById('result');
const allPossible = document.querySelectorAll('button');

let userchoice;

allPossible.forEach(ind => ind.addEventListener('click',(e)=>{
    userchoice = e.target.id;
    usr_choice.innerHTML = userchoice;
    generate_computerChoice();
    getResult();
}));
function generate_computerChoice()
{
    const arr =['Rock' , 'Scissors','Paper'];
    const random_index = Math.floor(Math.random()*arr.length);
    computerChoice = arr[random_index];
    com_choice.innerHTML = computerChoice;
}
function getResult()
{
    if(computerChoice===userchoice)res.innerHTML= "its a Draw";
    else if(userchoice === "Scissors"&&computerChoice === "Paper")res.innerHTML = "you win";
    else if(userchoice === "Rock"&&computerChoice=== "Scissors")res.innerHTML = "you win";
    else if(userchoice === "Paper"&&computerChoice=== "Rock")res.innerHTML = "you win";
    else res.innerHTML = "you lose";
}