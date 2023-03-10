import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from 'reactstrap';

function CourseDetails(props) {
  return (
    <Card color="dark" outline className="my-2">
      <Container>
        <CardTitle tag="h1" style={{ margin: '8px' }}>
          {props.title} ({props.id})
        </CardTitle>
        <CardImg src={props.img} alt="123" style={{ width: '100%' }} top />
        <CardBody>
          <Row>
            <Col md="6">
              <p className="h5  py-2">Price: {props.price}€</p>
            </Col>
            <Col md="6">
              <p className="h5  py-2">Duration: {props.duration}</p>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <p className="h5  py-2">Online: {props.online ? 'Yes' : 'No'}</p>{' '}
            </Col>
            <Col md="6">
              <p className="h5  py-2">
                Dates : {props.startDate} - {props.endDate}
              </p>
            </Col>
          </Row>
          <CardText style={{ fontSize: '24px' }}>{props.description}</CardText>
          <Row>
            <Col md="6" className="d-flex justify-content-center my-2">
              {/* <EditModal isOpen={modal} toggle={toggleModal} /> */}
              <Link to={`/edit-page/${props.id}`}>
                <Button color="info">View Details</Button>
              </Link>
            </Col>
            <Col md="6" className="d-flex justify-content-center">
              <Button color="danger" size="lg" onClick={props.delete}>
                Delete
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Container>
    </Card>
  );
}

export default CourseDetails;
