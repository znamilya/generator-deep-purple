import actionsTypes from './actionsTypes';


const defaultState = [];

const <%= name %>Reducer = (state = defaultState, action) => {
    switch (action.type) {
<% if (actions.length) { %>
<% actions.forEach(function (action, i) { -%>
        case actionsTypes.<%= actionsTypes[i] %>:
            return state;

<% }) -%>
<% } -%>
        default: {
            return state;
        }
    }
}


export default <%= name %>Reducer;
