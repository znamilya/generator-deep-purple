import { makeActionCreator } from 'app/helpers/redux';
import actionTypes from './actionTypes';

<% if (actions.length) { %>
<% actions.forEach(function (action, i) { -%>
export const <%= action %> = makeActionCreator(actionTypes.<%= actionsTypes[i] %>);
<% }) -%>
<% } -%>