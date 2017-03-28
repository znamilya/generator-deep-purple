import { makeActionTypes } from 'helpers/redux';

<% if (actionsTypes.length) { %>
export default makeActionTypes('<%= name %>', [
<% actionsTypes.forEach(function (actionType) { -%>
    '<%= actionType %>',
<% }) -%>
]);
<% } -%>