import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withFormik } from 'formik';

const AddTodoForm = ({ values, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-name"
        name="todoText"
        label="Name"
        margin="normal"
        variant="outlined"
        value={values.todoText}
        onChange={handleChange}
      />
      <br />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

const formikOptions = {
  handleChange: (event, values) => {
    values[event.target.key] = event.target.value;
  },
  mapPropsToValues: props => ({ todoText: props.initialValue }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.handleClick(values.todoText);
    setSubmitting(false);
  },
};

export default withFormik(formikOptions)(AddTodoForm);
