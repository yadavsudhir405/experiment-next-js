import { connect } from 'react-redux';
import Footer from '../Footer';
import { setVisibilityFilter } from '../../../redux/action-creator';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setVisibility: (filter) => {
    dispatch(setVisibilityFilter(filter));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);
