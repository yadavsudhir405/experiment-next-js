import actions from 'src/redux/action';

const visibilityFilter = (state = actions.SHOW_ALL, action) => {
    switch (action.type) {
        case actions.SET_VISIBILITY_FILTER:
            return action.filter;

        default:
            return 'SHOW_ALL';
    }
};


export default visibilityFilter;
