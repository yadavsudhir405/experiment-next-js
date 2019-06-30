import React from 'react';
import actions from '../../../src/redux/action';
import Link from './Link';

const Footer = ({ setVisibility }) => (
  <div>
    <span>Show: </span>
    <Link filter={actions.VISIBILITY_FILTER.SHOW_ALL} handleClick={() => setVisibility(actions.VISIBILITY_FILTER.SHOW_ALL)}>
      All
    </Link>
    <Link filter={actions.VISIBILITY_FILTER.SHOW_ACTIVE} handleClick={()=> setVisibility(actions.VISIBILITY_FILTER.SHOW_ACTIVE)}>
      Active
    </Link>
    <Link filter={actions.VISIBILITY_FILTER.SHOW_COMPLETED} handleClick={() => setVisibility(actions.VISIBILITY_FILTER.SHOW_COMPLETED)}>
      Completed
    </Link>
  </div>
);

export default Footer;
