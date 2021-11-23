const menubar = document.querySelector('.menu')
const title = document.querySelector('.title')
const flagRed =document.querySelector('.flag-red')
const flagRed2 = document.querySelector('.flag-red2')
const flagYelllow =document.querySelector('.flag-yellow')
const btn = document.querySelectorAll('.btn')



const activeBg = () => {
  menubar.classList.add('active')
  title.classList.add('active')
  flagRed.classList.add('active')
  flagRed2.classList.add('active')
  flagYelllow.classList.add('active')
  btn.forEach((x)=>{
    x.classList.add('active')
  })
  
  
}

const deactiveBg = () => {
  menubar.classList.remove('active')
  flagRed.classList.remove('active')
  flagRed2.classList.remove('active')
  flagYelllow.classList.remove('active')
  btn.forEach((x)=>{
    x.classList.remove('active')
  })

}

menubar.addEventListener('mouseenter', () => {
  activeBg()
})

menubar.addEventListener('mouseleave', () => {
  deactiveBg()
})