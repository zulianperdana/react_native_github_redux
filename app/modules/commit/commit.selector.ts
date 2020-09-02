import {createSelector} from 'reselect';

const repositorySelector = (state, props) => state.commit.items[props.repository];

export default createSelector(repositorySelector, (item) => item);
