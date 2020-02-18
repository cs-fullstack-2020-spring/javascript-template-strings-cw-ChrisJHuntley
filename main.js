// let Name= "Chris";
// let id=4415;
// let address="Memphis,TN";
// let myTemplate= `My Name is ${Name}
// My id is ${id}
// My address is ${address}`;
// alert(`${myTemplate}`);


// let contestant="B_223"
// let score= 9001
// alert(`Congradulations ${contestant} !! Your Score is ${score}`);



let team1=prompt("What is your Home Team?");
let team2=prompt("What is your Away Team?");
let Points=prompt(`How many points did ${team1} have?`);
let awayPoints=prompt(`How many points did ${team2} have?`);
if(Points>awayPoints){
    alert(`${team1} has Defeated ${team2}!!!
    
    Home ${team1} score: ${Points}
    Away ${team2} score ${awayPoints}`);
}
    
    if(awayPoints>Points){
        alert(`${team2} has Defeated ${team1}!!!
        
        Home ${team2} score: ${awayPoints}
    Away ${team1} score ${Points}`);

    }
    if(Points==awayPoints){
        alert("It was a Draw!!!")
    }


