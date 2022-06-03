import ImageComponent from 'components/Image'
import Image from 'next/image'

import python from 'assets/python.png'
import js from 'assets/js.png'
import html from 'assets/html.webp'
import css from 'assets/css.webp'
import sql from 'assets/sql.png'
import node from 'assets/node.png'
import react from 'assets/react.png'
import next from 'assets/next.png'
import dash from 'assets/dash.png'
import tensor from 'assets/tensor.png'
import skit from 'assets/skit.svg'
import mongo from 'assets/mongo.png'

import paneles from 'assets/paneles.png'
import gestor from 'assets/gestor.jpg'

import biblioteca from 'assets/biblioteca.png'



import { Navigation, Pagination, Scrollbar, A11y,EffectCube,EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import 'swiper/css/bundle';
import "swiper/css/effect-cards";


const DS4 =()=>{
  return(
    <div className='d-flex flex-column'>
      <span className='title-card'> Data science curse from Correlation One company</span>
      <div className='content-card'>
        This course was an oportunity offered by the government of Colombia, where only about the 10% of the people who signed 
        up  were selected based on a test. It had a duration of 375 hours, with professors from USA and it was a great experience.
      </div>

      <a target="_blank" href="https://www.credential.net/8c662167-5fab-4d86-9e84-74d590ddc9bc#gs.pql2f3" >
        <button className=' button-swiper'>  See credential </button>
      </a>
    </div>
  )
}

const MisionTic =()=>{
  return(
    <div className='d-flex flex-column'>
      <span className='title-card'>Web development curse</span>
      <div className='content-card'>
        This course was led by the government of Colombia to meet the challenges of the Fourth Industrial Revolution. 
        It had a duration of 800 hours in the Universidad de Antioquia where I could learn the MERN stack and the Scrum development methodology.
      </div>

      <a target="_blank" href='/certificado.pdf' >
        <button className=' button-swiper'>  See credential </button>
      </a>
    </div>
  )
}


const SwiperPart=()=>{
  return (
    <Swiper
      // install Swiper modules
      effect={"cards"}
      modules={[Navigation,Pagination,EffectCube,EffectCards]}
      loop={true}
      spaceBetween={10}
      slidesPerView={1}
      navigation={true}
      centeredSlides={true}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      className="mySwiper"
    >
      <SwiperSlide> <DS4 />  </SwiperSlide>
      <SwiperSlide> <MisionTic /> </SwiperSlide>

    </Swiper>
  );

}



const About =()=>{
  return(
    <div className='section about-container '>
        <span id='about' className='anchor'></span>

        <div className='about'>
          <span className='titulo'> About </span>
          <div className='about-hv '>
            <p>
              I am a mechanical engineer by profession since 2017. Passionate in the TIC sector since I started my master's degree in mechanical 
              engineering in 2020 on topics related to renewable energy and data analysis. I would like to apply in a role related to Data scientist 
              or Web developer. I am self-taught in this sector, participating in different kaggle competitions for the data science area and building 
              different personal projects for the web development area.           
            </p>

            <a target="_blank" href='/Hv.pdf' className='text-center mt-2' >
              <button className='button-cv '>  See CV </button>
            </a>

          </div>
        </div>

        <div className='about mt-5 '>
          <span className='titulo mb-4'> Main courses </span>
          <SwiperPart />
        </div>

    </div>
  )
}



const Skills =()=>{


  return(
    <div className='section skills-margin'>
      <span id='skillset' className='anchor'></span>
      <span className='titulo'> Skillset</span>
      <div className='skillset'>
        <ImageComponent   
          label='JavaScript'
          src={js}
          alt="JavaScript" 
          style={{borderRadius:"40px", }}
          className={'img-skillset'}
          divClassName={'img-skillset-container'}
       />
        <ImageComponent 
          label='Html'
          src={html}
          alt="Html" 
          className={'img-skillset'}
          divClassName={'img-skillset-container'}
        />
        <ImageComponent 
          label='Css'
          src={css}
          alt="Css" 
          className={'img-skillset'}
          divClassName={'img-skillset-container'}
        />
        <ImageComponent 
          label='Node.js'
          src={node}
          alt="Node.js" 
          style={{borderRadius:"15px", }}
          className={'img-skillset'}
          divClassName={'img-skillset-container'}
        />
        <ImageComponent 
          label='React.js'
          src={react}
          alt="React.js" 
          style={{borderRadius:"15px", }}
          className={'img-skillset'}
          divClassName={'img-skillset-container'}
        />
        <ImageComponent 
          label='Next.js'
          src={next}
          alt="Next.js" 
          style={{borderRadius:"15px", }}
          className={'img-skillset'}
          divClassName={'img-skillset-container'}
        />
        <ImageComponent 
          label='MongoDB'
          src={mongo}
          alt="MongoDB" 
          style={{borderRadius:"15px", }}
          className={'img-skillset'}
          divClassName={'img-skillset-container'}
        />
        <ImageComponent 
          label='SQL'
          src={sql}
          alt="SQL" 
          style={{borderRadius:"15px", }}
          className={'img-skillset'}
          divClassName={'img-skillset-container'}
        />
        <ImageComponent 
          label='Python'
          src={python}
          alt="Python" 
          style={{borderRadius:"40px", }}
          className={'img-skillset'}
          divClassName={'img-skillset-container'}
          
        />
        <ImageComponent 
          label='Dash'
          src={dash}
          alt="Dash"
          style={{borderRadius:"15px", }}
          className={'img-skillset'}
          divClassName={'img-skillset-container'}
        />
        <ImageComponent 
            label='TensorFlow'
            src={tensor}
            alt="TensorFlow" 
            style={{borderRadius:"15px", }}
            className={'img-skillset'}
            divClassName={'img-skillset-container'}
        />
        <ImageComponent 
            label='SkLearn'
            src={skit}
            alt="SkLearn" 
            style={{borderRadius:"15px", }}
            className={'img-skillset'}
            divClassName={'img-skillset-container'}
        />

      </div>
    </div>
  )
}

const Proyectos =()=>{

    if (typeof window !== "undefined") {
      $(document).ready(function(){
        if(window.innerWidth < 767){
          $('.portfolio__item').addClass('project-resize').removeClass('portfolio__item');
        }
      });
      $(window).resize(function(){
        if(window.innerWidth < 767){
          $('.portfolio__item').addClass('project-resize').removeClass('portfolio__item');
        }else{
          $('.project-resize').addClass('portfolio__item').removeClass('project-resize');
        }
      });

    }

  return(
    <div className='section'>
      <span id='proyectos' className='anchor'></span>
      <span className='titulo mb-4'  > Projects </span>   

      <div className=' projects-content'>
        
          <div className="portfolio__item">
            <ImageComponent
                label=''
                src={gestor}
                alt="Biblioteca de codigos" 
                style={{borderRadius:"40px", }}
                divClassName={'img-project-container'}
                
            />
            <div className="portfolio__description">
              <h3 className="portfolio__description--title">University project manager</h3>
              <p className="portfolio__description--text">
                  Application to create projects where students can register.
                  <br /><br />
                  Built on Next.js and it uses a PostgreSQL database, queried by GrahpQL + ORL Prisma.
              </p>
              <div className="buttons__container">
                <a
                  className="button"
                  href={"https://avocado-store-jgestradam-nd4yxxllv-jgestradam.vercel.app/"}
                  target="_blank"
                >
                  <i className="fas fa-globe-americas"></i> Website
                </a>
                <a
                  className="button"
                  href="https://github.com/jgestradam/Avo-store"
                  target="_blank"
                >
                  <i className="fab fa-github"></i> Repository
                </a>
              </div>
            </div>
          </div>


          <div className="portfolio__item">
           <ImageComponent
                label=''
                src={biblioteca}
                alt="Biblioteca de codigos" 
                style={{borderRadius:"40px", }}
                divClassName={'img-project-container'}
            />
            <div className="portfolio__description">
              <h3 className="portfolio__description--title">Code library</h3>
              <p className="portfolio__description--text">
                  It's an online storage of the commands I use frequently in python and on github.
                  <br /><br />
                  Built in React and it uses a MongoDB database, queried by GraphQL.
              </p>
              <div className="buttons__container">
                <a
                  className="button"
                  href={"https://avocado-store-jgestradam-nd4yxxllv-jgestradam.vercel.app/"}
                  target="_blank"
                >
                  <i className="fas fa-globe-americas"></i> Website
                </a>
                <a
                  className="button"
                  href="https://github.com/jgestradam/Avo-store"
                  target="_blank"
                >
                  <i className="fab fa-github"></i> Repository
                </a>
              </div>
            </div>
          </div>


          <div className="portfolio__item">
            <ImageComponent
                label=''
                src={paneles}
                alt="Paneles solares" 
                style={{borderRadius:"40px", }}
                divClassName={'img-project-container'}
            />
            <div className="portfolio__description">
              <h3 className="portfolio__description--title">Photovoltaic energy forecast in Colombia</h3>
              <p className="portfolio__description--text">
                  Dashboard that allows predicting the power that will be produced in a solar panel in different regions of Colombia.
                  <br /><br />
                  Build in Dash and it contains data analysis and predictive models.
              </p>
              <div className="buttons__container">
                <a
                  className="button"
                  href={"https://avocado-store-jgestradam-nd4yxxllv-jgestradam.vercel.app/"}
                  target="_blank"
                >
                  <i className="fas fa-globe-americas"></i> Website
                </a>
                <a
                  className="button"
                  href="https://github.com/jgestradam/Avo-store"
                  target="_blank"
                >
                  <i className="fab fa-github"></i> Repository
                </a>
              </div>
            </div>
          </div>

      </div>
    </div>


  )

}


const Contact =()=>{
  return(
    <div id='contact' className='section'>
        <span className='titulo mt-4'> Contact </span>   
        <div className='contact-category'>
            <a target="_blank" href="https://github.com/AndresPadillaUcros/Perfil" className='contact-link'>
                <i className="fab fa-github contact-icons"></i>
                <p> Follow Me</p>             
            </a>

          <a target="_blank" href="https://www.linkedin.com/in/andres-mauricio-padilla-ucros/"  className='contact-link'>
              <i className="fab fa-linkedin-in contact-icons"></i>
              <p> Contact Me</p>
          </a>
              
        </div>
    </div>

  )
}



const Home = () => {
  return (
    <div className='background-image'> 
      <About />
      <Skills />
      <Proyectos />
      <Contact />
    </div>
  )
}

export default Home
