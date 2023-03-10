import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
const CourseListItem = (props) => {
  return (
    <Row
      style={{
        borderBottom: 'solid 1px',
        marginRight: 0,
        marginLeft: 0,
        paddingBottom: '10px',
        paddingTop: '10px',
        ...props.style,
        alignItems: 'center',
      }}
    >
      <Col md="1">
        <>{props.image}</>
      </Col>
      <Col md="4">
        <>{props.title}</>
      </Col>
      <Col md="1">
        {typeof props.online === 'string' ? (
          <>{props.online}</>
        ) : (
          <>{props.online ? 'Yeah' : 'No'}</>
        )}
      </Col>
      <Col md="1">{props.price}</Col>
      <Col md="3">
        {props.date ? (
          <>{props.date}</>
        ) : (
          <>
            {props.startDate} - {props.endDate}
          </>
        )}
      </Col>
      <Col md="2">
        {props.actions ? (
          props.actions
        ) : (
          <Link to={`/courses/${props.id}`}>
            <Button color="info">View Details</Button>
          </Link>
        )}
      </Col>
    </Row>
  );
};

export default CourseListItem;
