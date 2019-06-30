import * as actions from '../action';

const visibilityFilter = (state = actions.default.SHOW_ALL, action) => {
  switch (action.type) {
    case actions.default.SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return 'SHOW_ALL';
  }
};

export default visibilityFilter;
