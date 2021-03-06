import Image from 'next/image'
import picture from 'assets/perfil.jpg'


const Header = () => {
  return (
        <div className='top-part ' id='top-part'>
            <div className='profile-div'>
                <Image src={picture}
                    alt="Profile Picture" 
                    className='profile-picture'
                />
            </div>
            <h1 className='mt-5 text-center'> Hi! <br/> I &apos;m Andres Padilla </h1>
        </div>
    
  )
}

export default Header