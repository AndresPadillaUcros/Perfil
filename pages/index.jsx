import ImageComponent from 'components/Image'


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

const Roles =()=>{
  return(
    <div id='aspirations'>
        <span className='titulo'> Aspirations</span>
        <div className='aspirations'>
          <span> Data scientist </span>
          <span> Database analyst </span>
          <span> Business intelligence analyst </span>
          <span> Web developer (front or back) </span>
        </div>
    </div>
  )
}



const Skills =()=>{

  const width =100
  const height=100
  return(
    <div id='skillset'>
      <span className='titulo'> Skillset</span>
      <div className='skillset'>
        <ImageComponent   
          label='JavaScript'
          src={js}
          alt="JavaScript" 
          width={width}
          height={height}
          style={{borderRadius:"40px", }}
       />
        <ImageComponent 
          label='Html'
          src={html}
          alt="Html" 
          width={width}
          height={height}
        />
        <ImageComponent 
          label='Css'
          src={css}
          alt="Css" 
          width={width}
          height={height}
        />
        <ImageComponent 
          label='SQL'
          src={sql}
          alt="SQL" 
          width={width}
          height={height}
          style={{borderRadius:"15px", }}
        />
        <ImageComponent 
          label='Node.js'
          src={node}
          alt="Node.js" 
          width={width}
          height={height}
          style={{borderRadius:"15px", }}
        />
        <ImageComponent 
          label='React.js'
          src={react}
          alt="React.js" 
          width={width}
          height={height}
          style={{borderRadius:"15px", }}
        />
        <ImageComponent 
          label='Next.js'
          src={next}
          alt="Next.js" 
          width={width}
          height={height}
          style={{borderRadius:"15px", }}
        />
        <ImageComponent 
          label='Python'
          src={python}
          alt="Python" 
          width={width}
          height={height}
          style={{borderRadius:"40px", }}
          
        />
        <ImageComponent 
          label='Dash'
          src={dash}
          alt="Dash"
          width={width}
          height={height}
          style={{borderRadius:"15px", }}
        />
        <ImageComponent 
            label='TensorFlow'
            src={tensor}
            alt="TensorFlow" 
            width={width}
            height={height}
            style={{borderRadius:"15px", }}
        />
        <ImageComponent 
            label='SkLearn'
            src={skit}
            alt="SkLearn" 
            width={width}
            height={height}
            style={{borderRadius:"15px", }}
        />

      </div>
    </div>
  )
}

const Proyectos =()=>{

  return(
    <div id='proyectos'>
  
      <span className='titulo'> Projects </span>   

      <div className='d-flex flex-row justify-content-around '>
          <div className='d-flex flex-column flex-wrap'> 
            <span className='categoria-proyectos'>Biblioteca de codigos </span>
            <p> Es un almacenamiento en linea de los comandos que mas utilizo en python y en github </p>
            <p> Emplea de una base de datos de MongoDB, consultada mediante GrahpQL</p>
          </div>
          <div className='d-flex flex-column flex-wrap'> 
            <span className='categoria-proyectos'> Gestor de proyectos de universidad </span>
            <p> Aplicacion para crear proyectos donde los estudiantes puedan registrarse </p>
            <p> Emplea de una base de datos de PostgreSQL, consultado mediante GrahpQL + ORL Prisma</p>
          </div>
          <div className='d-flex flex-column flex-wrap'> 
            <span className='categoria-proyectos'> Prediccion de la potencia de paneles solares en regiones de colombia</span>
            <p> Dashboard que permite predecir la poteencia que producira en un panel solares en diferentes regiones de colombia</p>
            <p> Contiene analisis de datos y modelos predictivos </p>
          </div>
      </div>
    
    
    
    </div>


  )

}





const Home = () => {
  return (
    <div>
     
      <Roles />
      <Skills />
      <Proyectos />
      



    </div>
  )
}

export default Home
