import { schema, arrayOf } from 'normalizr';


const <%= name %>Schema = new schema.Entity('<%= name %>s',);
const <%= name %>sSchema = new schema.Array( <%= name %>Schema);


export { <%= name %>Schema,  <%= name %>sSchema };
