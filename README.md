# GraphQL API for hirokoymj.com

- Production: https://hiroko-web-backend-new-08d39ee2590b.herokuapp.com/
- Localhost: http://localhost:4000/
- MongoDB Atlas: https://account.mongodb.com/account/login?nds=true
- Technologies: Node.js, Apollo Server v3, Typescript, MongoDB/Mongoose, Weather API
- Deployment platform: Heroku

## References:

**Apollo Server**

- [Apollo Server v3](https://www.apollographql.com/docs/apollo-server/v3)
- [Apollo Server 3: Custom scalars](https://www.apollographql.com/docs/apollo-server/v3/schema/custom-scalars)
- [Apollo Server 3: Data sources](https://www.apollographql.com/docs/apollo-server/v3/data/data-sources)
- [Migrating to Apollo Server 3](https://www.apollographql.com/docs/apollo-server/v3/migration)
- [apollo-datasource-rest](https://www.npmjs.com/package/apollo-datasource-rest)
- [@apollo/datasource-rest](https://www.npmjs.com/package/@apollo/datasource-rest)
- [Apollo Server v4 Get started](https://www.apollographql.com/docs/apollo-server/getting-started)

**graphql-tools**

- [graphql-tools](https://the-guild.dev/graphql/tools/docs/introduction)
- [Modularizing your GraphQL schema code](https://www.apollographql.com/blog/modularizing-your-graphql-schema-code)

**Deployment**

- [Heroku: Deploying with Git](https://devcenter.heroku.com/articles/git#create-a-heroku-remote)
- https://stackoverflow.com/questions/70707931/heroku-sh-1-tsc-not-found

**Miscellaneous**

- [Receive DEP0170 when connecting MongoDB Atlas with Node.js 20.3.1](https://stackoverflow.com/questions/76594556/receive-dep0170-when-connecting-mongodb-atlas-with-node-js-20-3-1)
- [Why is 'type: module' in package.json file?](https://stackoverflow.com/questions/61401475/why-is-type-module-in-package-json-file)
- [mongoose version8.0.4](https://mongoosejs.com/docs/connections.html#options)
- https://openweathermap.org/api

## Testing GraphQL queries

- https://studio.apollographql.com/sandbox/explorer

```
query GetCat {
  categoryAll {
    id
  }
}
```

```
query GetCat {
  categories {
    categoryFeed {
      abbr
    }
  }
}
```

- Test Query 2 (datasource REST API)

```
query GetForcast($city: String!){
  dailyForecast (city: $city){
    id
    cityInfo{
      name
      country
    }
  }
}
# Query variables
{
  "city": "tokyo"
}
```

```
query GetWeather($city: String!){
currentWeatherByCity (city: $city){
  id
}
}
# Query variables
{
  "city": "tokyo"
}
```

## History

| Date       | Description                          |
| ---------- | ------------------------------------ |
| 01.14.2024 | Migrated Apollo Server v2 to v3.     |
| 01.14.2024 | Added _type:module_ in package.json. |
| 01.18.2024 | Fixed datasource bug. Backed to use  |

- 01.18.2024 - Fixed datasource REST API bug. Since makeExecutableSchema() didnt't work datasource property, I backed to use original ApolloServer schema object as a parameter.
- 01.18.2024 - Installed Typescript and @types/node. Converted all file extension from .js to .ts.
