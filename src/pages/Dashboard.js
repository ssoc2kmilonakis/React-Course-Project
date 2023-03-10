import React from 'react';
import { Card, CardBody, Row } from 'reactstrap';
import LastFiveCoursesCard from '../components/LastFiveCoursesCard';
import StatBox from '../components/StatBox';
import { useFetch } from '../util/useFetch';
const Dashboard = () => {
  const data = useFetch('http://localhost:3001/stats');
  return (
    <div className="container">
      <div style={{ paddingBottom: '10px' }}>
        <Card>
          <CardBody style={{ backgroundColor: '#d6d6d5' }}>
            <h1>Welcome to our Dashboard!</h1>
            <p>Manage everything and have fun!</p>
          </CardBody>
        </Card>
      </div>
      <Row className="mt-4">
        {data.map((dt) => (
          <StatBox key={dt.id} title={dt.title} amount={dt.amount} />
        ))}
      </Row>
      <LastFiveCoursesCard />
    </div>
  );
};

export default Dashboard;
