import React from 'react';
import { Field, Form, withFormik } from 'formik';
import PropTypes from 'prop-types';

const AddTodoForm = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="todoText" type="text" />
      <Field type="submit" value="Submit"/>
    </Form>
  );
};

const handleSubmit = (values, { props, setSubmitting }) => {
  const { todoText } = values;
  props.handleClick(todoText);
  values.todoText = '';
  setSubmitting(false);
};

AddTodoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};


const AddTodo = withFormik({
  handleSubmit,
})(AddTodoForm);

export default AddTodo;
