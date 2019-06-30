import React from 'react'
import FilterLink from '../contFilterLink';
import actions from '../../../src/redux/action';

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={actions.VISIBILITY_FILTER.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={actions.VISIBILITY_FILTER.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={actions.VISIBILITY_FILTER.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
);

export default Footer;
