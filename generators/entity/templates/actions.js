import { makeActionCreator } from 'helpers/redux';
import actionACTIONS_TYPESTypes from './actionTypes';

<% if (actions.length) { %>
<% actions.forEach(function (action, i) { -%>
export const <%= action %> = makeActionCreator(ACTIONS_TYPES.<%= actionsTypes[i] %>);
<% }) -%>
<% } -%>