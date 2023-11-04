let navbarEl = document.getElementById('nav-bar')
let headerNavEl = document.getElementById('header-nav')
let btnTopNav = document.getElementById('btn-top-nav')


console.log('nav bar')
console.log(navbarEl)

console.log('header nav')
console.log(headerNavEl)

window.onscroll = () =>{
console.log(window.scrollY)
if(window.scrollY > 280){
  navbarEl.style.display = 'none';
  headerNavEl.style.cssText = 'position:fixed; margin-top:0px;'
headerNavEl.classList.add('fix-header-nav')
btnTopNav.style.display = 'block'
}else{
  navbarEl.style.display = 'flex'
  headerNavEl.style.cssText = 'position:relative; margin-top:100px'
  headerNavEl.classList.remove('fix-header-nav')
  btnTopNav.style.display = 'none'
}

}