document.addEventListener('DOMContentLoaded', function(){
    appStart();
});

function appStart(){
    navFija();
}

function navFija(){
    const headerMenu = document.querySelector('.header__menu');
    const headerImg = document.querySelector('.header__img');

    window.addEventListener('scroll', function(){
        if(headerImg.getBoundingClientRect().top < 0){
            headerMenu.classList.add('fijo');
        }
        else{
            headerMenu.classList.remove('fijo');
        }
    });
}
/*document.querySelectorAll('.modal__container img').forEach(el=>{
    el.addEventListener('click',function(ev){
        ev.stopPropagation();
        this.parentNode.classList.add('act');
    })
})
document.querySelectorAll('.modal__container').forEach(el=>{
    el.addEventListener('click',function(ev){
        this.classList.remove('act');
        console.log('click');
    })
})*/