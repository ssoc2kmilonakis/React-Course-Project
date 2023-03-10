import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardImg, CardTitle } from 'reactstrap';
function AllCoursesCard(props) {
  // console.log(props);
  return (
    <Card color="dark" outline style={{ marginBottom: '15px' }}>
      <CardTitle tag="h4" style={{ margin: '8px' }}>
        {props.title}
      </CardTitle>
      <CardImg
        src={props.img}
        alt="123"
        style={{ width: '100%' }}
        top
        width="100%"
      />
      <CardBody>
        <p>Price : {props.price}</p>
        <p>Online: {props.online ? 'Yes' : 'No'}</p>
        <p>Duration : {props.duration} </p>
        <p>
          Dates : {props.startDate} - {props.endDate}
        </p>
        <Link to={`/courses/${props.id}`}>
          <Button color="info">View Details</Button>
        </Link>
      </CardBody>
    </Card>
  );
}

export default AllCoursesCard;
