


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
      console.log(navMenu)
    })
  }
  


  return (
    <>
      <header className='header'>
        <nav className='my-navbar'>
          <a href="" className='logo navbar-link'>Andres Padilla</a>
          <button className="nav-toggle">
            <i className='fas fa-bars' />
          </button>

          <ul className='navbar-menu'>
            <li className='navbar-menu-item'>
              <a href="#aspirations" className='navbar-menu-link navbar-link'>Aspirations</a>
            </li>
            <li className='navbar-menu-item'>
              <a href="#skillset" className='navbar-menu-link navbar-link'>Skills</a>
            </li>
            <li className='navbar-menu-item'>
              <a href="#proyectos" className='navbar-menu-link navbar-link'>Proyectos</a>
            </li>
            <li className='navbar-menu-item'>
              <a href="" className='navbar-menu-link navbar-link'>HV</a>
            </li>
          </ul>

        </nav>
      </header>
    
    </>



  )
}


export default NavBar
