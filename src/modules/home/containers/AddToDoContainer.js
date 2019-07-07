import { connect } from 'react-redux';

import AddTodo from '../AddTodo';
import { addTodo } from '../../../redux/action-creator';

const mapDispatchToProps = dispatch => ({
  handleClick: value => {
    dispatch(addTodo(value));
  },
});

const mapStateToProps = (state) => ({
  cities: ['Bangalore', 'Delhi', 'Pune', 'NewDelhi'],
  initialValue: 'dummy',
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTodo);
