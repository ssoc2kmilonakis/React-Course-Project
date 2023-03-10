import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import CourseDetails from '../components/CourseDetails';
import { deleteCourse, fetchSingleCourse } from '../store';
function CourseDetailsPage() {
  const { id } = useParams();
  const { record, isLoading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleCourse(id));
    return () => {};
  }, [dispatch, id]);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    dispatch(deleteCourse(record.id));
    navigate('/courses');
  };
  if (isLoading) {
    return <div>Is Loa!!ding</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  if (!record) {
    return <div>...Loading</div>;
  }
  return (
    <CourseDetails
      id={record.id}
      img={record.imagePath}
      price={record.price.normal}
      duration={record.duration}
      title={record.title}
      online={record.online}
      startDate={record.dates.start_date}
      endDate={record.dates.end_date}
      description={record.description}
      delete={handleDelete}
    />
  );
}

export default CourseDetailsPage;
