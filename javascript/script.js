const burgerMenu=document.querySelector('.burger-menu');
const navMob=document.querySelector('.nav-mob');
let burgerStatus=false;
burgerMenu.addEventListener('click',()=>{
    
    if (burgerStatus) {
        navMob.style.display='none';
        burgerStatus= false
        
    }else{
        navMob.style.display='flex';
        burgerStatus=true
    }
})
