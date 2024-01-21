// this program is about Animated FAQ Section Mini Porject

const accordians = document.querySelectorAll('.accordian');

accordians.forEach(accordian =>{
    const icons = accordian.querySelector('.icons');
    const answer = accordian.querySelector('.answer');

    accordian.addEventListener('click',() =>{
       
        if(icons.classList.contains('active')){
            icons.classList.remove('active');
            answer.style.maxHeight = null;
        }else{
            icons.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';

        }
    })
})