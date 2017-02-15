const div = document.querySelectorAll('.skill-bar-runner');
const p_skill = document.querySelectorAll('.skill-level');

let skills = new Map();

let sk1 = {name: 'Diseño', lev: 87},
    sk2 = {name: 'Programación de Aplicaciones Web', lev: 90},
    sk3 = {name: 'Publicidad en Internet (Google Adwords)', lev: 75},
    sk4 = {name: 'Posicionamiento Web', lev: 80},
    sk5 = {name: 'E-commerce', lev: 85};

skills.set('sk1', sk1);
skills.set('sk2', sk2);
skills.set('sk3', sk3);
skills.set('sk4', sk4);
skills.set('sk5', sk5);

//let skills_arr = Array.from(skills);

function show_skills(el1, el2, skills) {
  for(let j=0; j<skills.size; j++) {
    for(let skill of skills)
      for(let width=1; width<=skill[1].lev*8; width++) {
            let timer = setTimeout(function () {
            el1[j].style.width = width + "px";
            el2[j].innerHTML = "Level: " + skill[1].lev + "/100";
          }, 10);
      }
  }
  // for(let skill of skills_arr) {
  //   console.log(skill.name);
  // }
}
show_skills(div, p_skill, skills);



//



//window.clearTimeout(timeoutID);
// for(let i=0; i<div.length; i++) {
//
// }
