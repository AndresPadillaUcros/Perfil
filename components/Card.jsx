import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ReactCard=({title, text, link})=> {
  return (
    <Card className="body-card text-center" style={{ width: '18rem' }} >
      
      <Card.Body>
        <Card.Title className='title-card'>{title}</Card.Title>
        <Card.Text className='text-card'>
            {text}
        </Card.Text>
        <a target="_blank" href={link}  rel="noreferrer" className='text-center'>
            <button className='button-card '>  NoteBook </button>
        </a>
      </Card.Body>
    </Card>
  );
}

export default ReactCard;