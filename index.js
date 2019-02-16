const skills = document.querySelectorAll('.skills-Container .skill');
const percChange = document.getElementByClassName('percentage');

percChange.innerHTML = "sdasd";

window.addEventListener('scroll', (e) => {
    const viewTop = window.scrollY;
    const viewBottom = viewTop + window.innerHeight;
    for(let i = 0; i < skills.length; i++){
        const skill = skills[i];
        const top = skill.offsetTop;
        const bottom = top + skill.clientHeight;
        console.log(viewTop, viewBottom);
        console.log(top, bottom);
        if(viewTop < top && bottom < viewBottom){
            skill.classList.add('show');
            for (let x = 0; x < random() ; x++){
                percChange.innerHTML = x;
            }
        }else{
            skill.classList.remove('show')
        }



    }
})

function random() {
    return Math.ceil(Math.random()*100);
}