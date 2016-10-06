import { graphql, buildSchema } from 'graphql';

const data = require('./data.json');

// Define GraphQL schema string
const schemaString = `
  type Episode {
    id: String,
    season: Int,
    noInSeason: Int,
    title: String,
    synopsis: String,
  }
  type Show {
    title: String,
    country: String,
    episodes: [Episode],
  }
  type Query {
    shows: [Show],
  }
`;

// Build GraphQL schema
const schema = buildSchema(schemaString);

// Define GraphQL root
const root = data;

// Define GraphQL API
export default (event, context, cb) => {
  graphql(schema, event.query.query, root).then((response) => {
    cb(null, response);
  }).catch((err) => {
    cb(err);
  });
};
