import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { addData } from '../store';
import useDispatchFetch from '../util/useDispatchFetch';
function AddCourse() {
  const { data } = useDispatchFetch();
  function getNextId() {
    const maxId = Math.max(...data.map((course) => course.id));
    return maxId + 1;
  }
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [price, setPrice] = useState({ early_bird: '', normal: ' f' });
  const [dates, setDates] = useState({
    start_date: new Date().toISOString().substring(0, 10),
    end_date: new Date().toISOString().substring(0, 10),
  });
  const [duration, setDuration] = useState('');
  const [online, setOnline] = useState(false);

  function handleStartDateChange(event) {
    setDates((prevState) => ({
      ...prevState,
      start_date: new Date(event.target.value).toISOString().substring(0, 10),
    }));
  }

  function handleEndDateChange(event) {
    setDates((prevState) => ({
      ...prevState,
      end_date: new Date(event.target.value).toISOString().substring(0, 10),
    }));
  }

  const formValues = {
    id: getNextId(),
    title,
    imagePath,
    price,
    dates,
    duration,
    description,
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addData(formValues));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          type="textarea"
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="imagepath">Image Path</Label>
        <Input
          type="text"
          name="imagepath"
          id="imagepath"
          value={imagePath}
          onChange={(e) => {
            setImagePath(e.target.value);
          }}
        />
      </FormGroup>
      <FormGroup>
        <Label for="start_date">Start Date</Label>
        <Input
          type="date"
          value={dates.start_date}
          onChange={handleStartDateChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="end_date">End Date</Label>
        <Input
          type="date"
          name="end_date"
          id="end_date"
          value={dates.end_date}
          onChange={handleEndDateChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="duration">Duration</Label>
        <Input
          type="text"
          name="duration"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="early_bird">Early Bird Price</Label>
        <Input
          type="number"
          name="early_bird"
          id="early_bird"
          value={price.early_bird}
          onChange={(e) =>
            setPrice((prevState) => ({
              ...prevState,
              early_bird: e.target.value,
            }))
          }
        />
      </FormGroup>
      <FormGroup>
        <Label for="normal">Normal Price</Label>
        <Input
          type="number"
          name="normal"
          id="normal"
          value={price.normal}
          onChange={(e) => {
            setPrice((prevState) => ({
              ...prevState,
              normal: e.target.value,
            }));
          }}
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="is_available"
            id="is_available"
            checked={online}
            onChange={(e) => setOnline(!online)}
          />{' '}
          Available
        </Label>
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
export default AddCourse;
