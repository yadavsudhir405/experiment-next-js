import { connect } from 'react-redux';

import AddTodo from '../AddTodo';
import { addTodo } from '../../../redux/action-creator';

const mapDispatchToProps = dispatch => ({
  handleClick: value => {
    dispatch(addTodo(value));
  },
});

const mapStateToProps = ({}) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTodo);
