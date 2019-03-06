const dinosaurs = [
    {
        dinoType: 't-rex',
        name: 'wrex',
    },
    {
        dinoType: 'stegosaurus',
        name: 'steve',
    },
    {
        dinoType: 'velocirapto',
        name: 'ted',
    }
];

//loop over the dinosaus
// built up a domstring
// print domstring to the dom 
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};
/*
const buildDinosaurs = () => {
    let domString = '';
    for (let i = 0; i <  dinosaurs.length; i++) {
        domString += `<div class="dinosaur">`
        domString += `<h3>${dinosaurs[i].dinoType}</h3>`;
        domString += `<p>${dinosaurs[i].name}</p>`;
        domString += `</div>`;
    }
    printToDom('dino-barn', domString);
};
*/

const assignments = [
    {
        title: 'product cards', 
        dueDate: '03/05/2019', 
        topic: 'HTML/CSS', 
        notes: 'Use flexbox',
        assignmentUrl: 'www.google.com',
    }, 
    {
        title: 'card2',
        dueDate: '03/17/2019',
        topic: 'HTML',
        notes: 'Use flexbox', 
        assignmentUrl: "www.google.com"
    },
    {
        title: 'card3',
        dueDate: '02/03/2019',
        topic: 'JS', 
        notes: 'use JS',
        assignmentUrl: 'www.google.com'
    }, 
    {
        title: 'card4',
        dueDate: '02/09/2019',
        topic: 'CSS', 
        notes: 'Use CSS',
        assignmentUrl: 'www.google.com'
    }
];

//total of 5 assignments
//build a  assignmentCards -- loop over assignments and make a domString
// reuse the printToDom function to display the domString

const assignmentCards = () => {
    let domString = '';
    for (let i = 0; i < assignments.length; i++) {
        domString += `<div class="something">`;
        domString += `<div class="title">${assignments[i].title}</div>`;
        domString += `<strong>${assignments[i].dueDate}</strong>`;
        domString += `<div><a href=http://${assignments[i].assignmentUrl}>HERE<a/></div>`;
        domString += `<div>${assignments[i].topic}</div>`;
        domString += `<div>${assignments[i].notes}</div>`;
        domString += `</div>`;
    }
    printToDom('cards', domString);
};





const init = () => {
  //buildDinosaurs();
  assignmentCards();
};

init();