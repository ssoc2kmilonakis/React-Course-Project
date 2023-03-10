import { Col, Container, Row } from 'reactstrap';
import AllCoursesCard from '../components/AllCoursesCard';
import useDispatchFetch from '../util/useDispatchFetch';
function Courses() {
  const { data, isLoading, error } = useDispatchFetch();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <Container>
      <h1>All Courses</h1>
      <Row>
        {data.map((course) => {
          return (
            <Col md="4" key={course.id}>
              <AllCoursesCard
                title={course.title}
                img={course.imagePath}
                price={course.price.normal}
                duration={course.duration}
                startDate={course.dates.start_date}
                endDate={course.dates.end_date}
                id={course.id}
              ></AllCoursesCard>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Courses;
