import React from 'react';
import { Field, Form, withFormik } from 'formik';
import PropTypes from 'prop-types';

const AddTodoForm = ({ handleSubmit, cities }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="todoText" type="text" /> <br/>
      <Field name="city" component="select" placeholder="Select Cities">
        {cities.map(city => <option value={city}>{city}</option>)}
      </Field>
      <Field type="submit" value="Submit" />
    </Form>
  );
};

const handleSubmit = (values, { props, setSubmitting }) => {
  const { city } = values;
  props.handleClick(city);
  //values.todoText = '';
  setSubmitting(false);
};

AddTodoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};


const AddTodo = withFormik({
  mapPropsToValues: (props) => ({ todoText: props.cities[0], city: props.cities[0] }),
  handleSubmit,
})(AddTodoForm);

export default AddTodo;
