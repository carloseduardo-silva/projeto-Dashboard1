/* seletores */
const lightbtn = document.querySelector('#lightpart')
const darkbtn = document.querySelector('#darkpart')
const btn = document.querySelector('#stylebtn')
const boxes = document.querySelector('div.box')
const sidemenureal = document.querySelector('#menureal')
const menubutton = document.querySelector('#menubtn')



/* Dark/Light Button */
function lightclick() {
lightbtn.classList.toggle('none')
darkbtn.classList.toggle('lightmode')
boxes.classList.toggle('dark')

}

function menuopen(){
    sidemenureal.classList.toggle('hide')
    menubutton.classList.toggle('hide')

    
}