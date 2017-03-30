import { makeActionCreator } from 'helpers/redux';
import ACTION_TYPES from './actionTypes';

<% if (actions.length) { %>
<% actions.forEach(function (action, i) { -%>
export const <%= action %> = makeActionCreator(ACTIONS_TYPES.<%= actionsTypes[i] %>);
<% }) -%>
<% } -%>