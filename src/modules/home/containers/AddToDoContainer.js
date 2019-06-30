import React from 'react';
import { connect } from 'react-redux';

import AddToDo from '../Add-Todo';
import { addTodo } from '../../../redux/action-creator';

const ref = React.createRef();

const mapDispatchToProps = ({ dispatch }) => ({
  onClick: dispatch(addTodo(ref.current.value())),
});

export default connect()(AddToDo);
