let OpenMenu = document.querySelector('.image-menu');
let Menu = document.querySelector('.Menu')


OpenMenu.addEventListener('click' , () =>{
    Menu.classList.toggle('toggel')
    OpenMenu.classList.toggle('Close')
})

