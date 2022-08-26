import Card from 'react-bootstrap/Card';

function App(title,image,detail,Button) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {detail}
        </Card.Text>
        <Button>{image}</Button>
      </Card.Body>
    </Card>
  );
}

export default App;