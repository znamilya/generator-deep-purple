import { createSelector} from 'reselect';
import { denormalize } from 'normalizr';


export const get<%= upName %> = createSelector([
    state => state.entities.<%= name %>,
], (<%= name %>) => {
    return <%= name %>;
});