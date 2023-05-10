"use strict";

let teams = [
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs", plays:"Kansas City, MO"},
];

const teamsListEl = document.getElementById('teamsList');
const selectBtnEl = document.getElementById('selectBtn');
// selectBtnEl.onclick = onSelectBtnClicked;

function teamsDropdown() {
    
    for (let i = 0; i < teams.length; i ++) {
        let optionEl = document.createElement('option');
        optionEl.textContent = teams[i].name
        optionEl.value = teams[i].code



        teamsListEl.appendChild(optionEl);
    
}
}

teamsDropdown();

// function onSelectBtnClicked() {
//     const selectedIndex = teamsListEl.selectedIndex;
//     const options = teamsListEl.options;

//     const selectedOption = options[selectedIndex];
//     console.log(`You've selected the ${selectedOption.textContent} (${selectedOption.value}), that play in ${teams[selectedIndex].plays}`);

// }

const form = document.querySelector('form');
form.onsubmit = onSubmit;

function onSubmit() {
    const selectedCode = teamsListEl.value

    let selectedTeam;
    for (let i = 0; i < teams.length; i++){
        const team = teams[i]
        if (team.code === selectedCode) {
            selectedTeam = team;
            break;
        }
    }

    const message = `You've selected the ${selectedTeam.name} (${selectedTeam.code}), that play in ${selectedTeam.plays}`;
    const messageEl = document.getElementById('messageP');
    messageEl.innerHTML = message;
    
    return false
}