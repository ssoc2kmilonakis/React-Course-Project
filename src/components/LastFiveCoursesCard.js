import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader } from 'reactstrap';

import useDispatchFetch from '../util/useDispatchFetch';
import CourseListItem from './CourseListItem';

const LastFiveCoursesCard = () => {
  const { data, isLoading, error } = useDispatchFetch();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <Card color="dark" outline>
      <CardHeader style={{ backgroundColor: '#ccc' }}>
        Last 5 Courses
      </CardHeader>
      <CardBody style={{ backgroundColor: '#ccc', padding: 0 }}>
        <CourseListItem
          title={'Title'}
          online={'Online'}
          price={'Price'}
          date={'Start Date - End Date'}
          actions={'Actions'}
          style={{ backgroundColor: 'white', fontWeight: 'bold' }}
        />
        {/* {data.map((course) => (
          <CourseListItem
            key={course.id}
            id={course.id}
            title={course.title}
            online={course.online}
            price={course.price.normal + '€'}
            startDate={course.dates.start_date}
            endDate={course.dates.end_date}
            style={
              course.id % 2 === 0
                ? { backgroundColor: 'white' }
                : { backgroundColor: '#ccc' }
            }
          />
        ))} */}
        {data.slice(-5).map((course) => (
          <CourseListItem
            key={course.id}
            id={course.id}
            title={course.title}
            online={course.online}
            price={course.price.normal + '€'}
            startDate={course.dates.start_date}
            endDate={course.dates.end_date}
            style={
              course.id % 2 === 0
                ? { backgroundColor: 'white' }
                : { backgroundColor: '#ccc' }
            }
          />
        ))}
        <div className="d-flex justify-content-center my-4">
          <Button color="primary" tag={Link} to="/courses" className="w-40">
            View all courses
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};
export default LastFiveCoursesCard;
