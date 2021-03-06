import { makeReducer } from 'helpers/redux';
import ACTION_TYPES from './actionTypes';


const defaultState = [];

const <%= name %>Reducer = makeReducer(defaultState, {
<% if (actions.length) { %>
<% actions.forEach(function (action, i) { -%>
    [ACTION_TYPES.<%= actionsTypes[i] %>]: (state, action) => ({
        ...state
    }),

<% }) -%>
<% } -%>
});


export default <%= name %>Reducer;
