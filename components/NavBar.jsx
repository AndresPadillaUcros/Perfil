import { useEffect } from "react";


const NavBar = () => {




  if (typeof window !== "undefined") {
    
    var height=$('#top-part').height();

    $(window).scroll(function (){
      if($(this).scrollTop()>height){
        $('.header').addClass('fixed')
      }else{
        $('.header').removeClass('fixed')
  
      }
    
    })

 


    const navToggle = document.querySelector(".nav-toggle")
    const navMenu=document.querySelector(".navbar-menu")
  
    
    navToggle.addEventListener("click", ()=>{
      navMenu.classList.toggle("nav-menu-visible")
      
    })
  }




  return (
    <>
      <header className='header'>
        <nav className='my-navbar'>
          <span  className='logo navbar-link'>Andres Padilla</span>
          <button className="nav-toggle">
            <i className='fas fa-bars' />
          </button>

          <ul className='navbar-menu'>
            <li className='navbar-menu-item'>
              <a href="#about" data-offset="100" className='navbar-menu-link navbar-link'>About</a>
            </li>
            <li className='navbar-menu-item'>
              <a href="#skillset" className='navbar-menu-link navbar-link'>Skills</a>
            </li>
            <li className='navbar-menu-item'>
              <a href="#proyectos" data-offset="200" className='navbar-menu-link navbar-link'>Projects</a>
            </li>
            <li className='navbar-menu-item'>
              <a href="#contact" className='navbar-menu-link navbar-link'>Contact</a>
            </li>

          </ul>

        </nav>
      </header>
    
    </>



  )
}


export default NavBar
