import { createActionTypes } from "app/helpers/redux";

<% if (actionsTypes.length) { %>
export default createActionTypes('<%= name.toLowerCase() %>', [
<% actionsTypes.forEach(function (actionType) { -%>
    <%= actionType %>,
<% }) -%>
]);
<% } -%>