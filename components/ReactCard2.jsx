import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import RenderIf from 'components/RenderIf'

const ReactCard2=({image,title, text, link})=> {

  return (
    <Card className="body-card text-center" style={{ width: '18rem' }} >
      <Card.Body>
        
        <RenderIf isTrue={(image)}>
          <Image src={image} />
        </RenderIf>
        
        <Card.Title className='title-card'>{title}</Card.Title>
        <Card.Text className='text-card'>
            {text}
        </Card.Text>
        <a target="_blank" href={link}  rel="noreferrer" className='text-center article-button'>
            <span className=''>  Take it </span>
        </a>
      </Card.Body>
    </Card>
  );
}

export default ReactCard2;