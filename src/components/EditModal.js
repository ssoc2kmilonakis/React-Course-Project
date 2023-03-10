import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { fetchSingleCourse, updateCourse } from '../store';

const EditModal = (isOpen, toggleModal) => {
  const { id } = useParams();
  const { record, isLoading, error } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleCourse(id));
  }, [dispatch, id]);

  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(record.title);
  const [description, setDescription] = useState(record.description);
  const [imagePath, setImagePath] = useState(record.imagePath);
  const [price, setPrice] = useState(record.price);
  const [dates, setDates] = useState(record.dates);
  const [duration, setDuration] = useState(record.duration);
  const [online, setOnline] = useState(record.online);
  console.log(record);

  const toggle = () => setModal(!modal);
  const handleSubmit = (event) => {
    console.log(id);
    event.preventDefault();
    const updatedCourse = {
      title,
      description,
      price,
      imagePath,
      dates,
      duration,
      online,
    };

    dispatch(updateCourse(id, updatedCourse));
  };
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <>
      <Button color="primary" onClick={toggle}>
        Edit
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Course</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image path</label>
              <input
                className="form-control"
                id="description"
                value={imagePath}
                onChange={(e) => setImagePath(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="earlyBird">Early Bird Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                value={price.early_bird}
                onChange={(e) =>
                  setPrice({ ...price, early_bird: e.target.value })
                }
              />
              <label htmlFor="normal">Normal Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                value={price.normal}
                onChange={(e) => setPrice({ ...price, normal: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                className="form-control"
                id="description"
                value={dates.start_date}
                onChange={(e) =>
                  setDates({ ...dates, start_date: e.target.value })
                }
              />
              <input
                type="date"
                className="form-control"
                id="description"
                value={dates.end_date}
                onChange={(e) =>
                  setDates({ ...dates, end_date: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="duration">Duration</label>
              <input
                className="form-control"
                type="text"
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                style={{ height: '100px' }}
                type="checkbox"
                id="online"
                value={online}
                onClick={(e) => setOnline(!online)}
              />
              <label htmlFor="online">Online</label>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
            Save
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default EditModal;
