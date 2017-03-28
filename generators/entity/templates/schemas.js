import { schema} from 'normalizr';


const <%= name %>Schema = new schema.Entity('<%= name %>s');
const <%= name %>Schema = new schema.Array(<%= name %>Schema);


export { <%= name %>Schema, <%= name %>Schema };
